import { permissions } from './permissions'
import { APP_SECRET, getUserId } from './utils'
import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { applyMiddleware } from 'graphql-middleware'
import {
  intArg,
  makeSchema,
  nonNull,
  objectType,
  stringArg,
  inputObjectType,
  arg,
  asNexusMethod,
  enumType,
  subscriptionType,
} from 'nexus'
import { DateTimeResolver } from 'graphql-scalars'
import { Context } from './context'

export const DateTime = asNexusMethod(DateTimeResolver, 'date')

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('allUsers', {
      type: 'User',
      resolve: (_parent, _args, context: Context) => {
        return context.prisma.user.findMany()
      },
    })

    t.nullable.field('me', {
      type: 'User',
      resolve: (parent, args, context: Context) => {
        const userId = getUserId(context)
        return context.prisma.user.findUnique({
          where: {
            id: Number(userId),
          },
        })
      },
    })

    t.nonNull.list.nonNull.field('allRooms', {
      type: 'Room',
      resolve: (_parent, _args, context: Context) => {
        return context.prisma.room.findMany({
          orderBy: {
            currentNumberofUsers: "desc"
          }
        })
      }
    })

    t.nonNull.list.nonNull.field('allRoomstoMe', {
      type: 'Room',
      resolve: (_parent, _args, context: Context) => {
        const userId = getUserId(context)
        return context.prisma.room.findMany({
          where: {
            OR: [{
              chatwithId: Number(userId) || null, ///other to I
            }, {
              ownerId: Number(userId)///I to other room
            }] 
          },
          orderBy: {
            currentNumberofUsers: "desc"
          }
        })
      }
    })

    t.nullable.field('postById', {
      type: 'Post',
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.post.findUnique({
          where: { id: args.id || undefined },
        })
      },
    })

    t.nonNull.list.nonNull.field('chatByRoomId', {
      type: 'Chat',
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.chat.findMany({
          where: { roomId: args.id },
          take: -15,
          orderBy: {
            createdAt: "asc"
          }
        })
      },
    })
    
    t.nullable.field('roomById', {
      type: 'Room',
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.room.findUnique({
          where: { id: args.id || undefined }
        })
      },
    })

    t.nonNull.list.nonNull.field('feed', {
      type: 'Post',
      args: {
        searchString: stringArg(),
        skip: intArg(),
        take: intArg(),
        orderBy: arg({
          type: 'PostOrderByUpdatedAtInput',
        }),
      },
      resolve: (_parent, args, context: Context) => {
        const or = args.searchString
          ? {
            OR: [
              { title: { contains: args.searchString } },
              { content: { contains: args.searchString } },
            ],
          }
          : {}

        return context.prisma.post.findMany({
          where: {
            published: true,
            ...or,
          },
          take: args.take || undefined,
          skip: args.skip || undefined,
          orderBy: args.orderBy || undefined,
        })
      },
    })

    t.list.field('draftsByUser', {
      type: 'Post',
      args: {
        userUniqueInput: nonNull(
          arg({
            type: 'UserUniqueInput',
          }),
        ),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.user
          .findUnique({
            where: {
              id: args.userUniqueInput.id || undefined,
              email: args.userUniqueInput.email || undefined,
            },
          })
          .posts({
            where: {
              published: false,
            },
          })
      },
    })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: stringArg(),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_parent, args, context: Context) => {
        const hashedPassword = await hash(args.password, 10)
        const user = await context.prisma.user.create({
          data: {
            name: args.name,
            email: args.email,
            password: hashedPassword,
          },
        })
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_parent, { email, password }, context: Context) => {
        const user = await context.prisma.user.findUnique({
          where: {
            email,
          },
        })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        return {
          token: sign({ userId: user.id}, APP_SECRET),
          user,
        }
      },
    })

    t.field('createDraft', {
      type: 'Post',
      args: {
        data: nonNull(
          arg({
            type: 'PostCreateInput',
          }),
        ),
      },
      resolve: (_, args, context: Context) => {
        const userId = getUserId(context)
        return context.prisma.post.create({
          data: {
            title: args.data.title,
            content: args.data.content,
            authorId: userId,
          },
        })
      },
    })

    t.field('createChat', {
      type: 'Chat',
      args: {
        data: nonNull(
          arg({
            type: 'CreateChatInput',
          }),
        ),
      },
      resolve: (_, args, context: Context) => {
        const userId = getUserId(context)
        return context.prisma.chat.create({
          data: {
            roomId: args.data.roomId,
            authorId: userId,
            content: args.data.content,
          },
        })
      },
    })
    
    t.field('createRoom', {
      type: 'Room',
      args: {
        data: nonNull(
          arg({
            type: 'RoomCreateInput',
          }),
        ),
      },
      resolve: (_, args, context: Context) => {
        const userId = getUserId(context)
        return context.prisma.room.create({
          data: {
            name: args.data.name,
            details: args.data.details,
            ownerId: userId,
          }
        })
      }
    })

    t.field('createRoomwithUser', {
      type: 'Room',
      args: {
        data: nonNull(
          arg({
            type: 'WithUserRoomCreateInput'
          })
        )
      },
      resolve: (_, args, context: Context) => {
        return context.prisma.room.create({
          data: {
            name: args.data.name,
            details: args.data.details,
            chatwithId: args.data.chatwithId,
          }
        })
      }
    })

    t.field('togglePublishPost', {
      type: 'Post',
      args: {
        id: nonNull(intArg()),
      },
      resolve: async (_, args, context: Context) => {
        try {
          const post = await context.prisma.post.findUnique({
            where: { id: args.id || undefined },
            select: {
              published: true,
            },
          })
          return context.prisma.post.update({
            where: { id: args.id || undefined },
            data: { published: !post?.published },
          })
        } catch (e) {
          throw new Error(
            `Post with ID ${args.id} does not exist in the database.`,
          )
        }
      },
    })

    t.field('incrementRoomUser', {
      type: 'Room',
      args: {
        id: nonNull(intArg()),
      },
      resolve: (_, args, context: Context) => {
        return context.prisma.room.update({
          where: { id: args.id || undefined },
          data: {
            currentNumberofUsers: {
              increment: 1,
            },
          },
        })
      },
    })
    
    t.field('decrementRoomUser', {
      type: 'Room',
      args: {
        id: nonNull(intArg()),
      },
      resolve: (_, args, context: Context) => {
        return context.prisma.room.update({
          where: { id: args.id || undefined },
          data: {
            currentNumberofUsers: {
              decrement: 1,
            },
          },
        })
      },
    })

    t.field('deleteRoom', {
      type: 'Room',
      args: {
        id: nonNull(intArg()),
      },
      resolve: (_, args, context: Context) => {
        return context.prisma.room.delete({
          where: { id: args.id },
        })
      },
    })
  },
})


const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id')
    t.string('name')
    t.nonNull.string('email')
    t.nonNull.boolean('isOnline')
    t.nonNull.list.nonNull.field('posts', {
      type: 'Post',
      resolve: (parent, _, context: Context) => {
        return context.prisma.user
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .posts()
      },
    })
    t.nonNull.list.nonNull.field('rooms', {
      type: 'Room',
      resolve: (parent, _, context: Context) => {
        return context.prisma.user
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .rooms()
      },
    })
    t.nonNull.list.nonNull.field('chats', {
      type: 'Chat',
      resolve: (parent, _, context: Context) => {
        return context.prisma.user
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .chats()
      },
    })
  },
})

const Post = objectType({
  name: 'Post',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('updatedAt', { type: 'DateTime' })
    t.nonNull.string('title')
    t.string('content')
    t.nonNull.boolean('published')
    t.nonNull.int('viewCount')
    t.field('author', {
      type: 'User',
      resolve: (parent, _, context: Context) => {
        return context.prisma.post
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .author()
      },
    })
  },
})

const Chat = objectType({
  name: 'Chat',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.string('content')
    t.nonNull.boolean('viewed')
    t.field('room', {
      type: 'Room',
      resolve: (parent, _, context: Context) => {
        return context.prisma.chat
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .room()
      },
    })
    t.field('author', {
      type: 'User',
      resolve: (parent, _, context: Context) => {
        return context.prisma.chat
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .author()
      },
    })
  }
})

const Room = objectType({
  name: 'Room',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.field('createdAt', { type: 'DateTime'})
    t.nonNull.string('name')
    t.string('details')
    t.nonNull.int('currentNumberofUsers')
    t.nonNull.list.nonNull.field('chats', {
      type: 'Chat',
      resolve: (parent, _, context: Context) => {
        return context.prisma.room
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .chats()
      },
    })
    t.field('owner', {
      type: 'User',
      resolve: (parent, _, context: Context) => {
        return context.prisma.room
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .owner()
      }
    })
    t.field('chatwith',{
      type: 'User',
      resolve: (parent, _, context: Context) => {
        return context.prisma.room
        .findUnique({
          where: { id: parent.id || undefined },
        })
        .chatwith()
      }
    })
  }
})

const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

const PostOrderByUpdatedAtInput = inputObjectType({
  name: 'PostOrderByUpdatedAtInput',
  definition(t) {
    t.nonNull.field('updatedAt', { type: 'SortOrder' })
  },
})

const UserUniqueInput = inputObjectType({
  name: 'UserUniqueInput',
  definition(t) {
    t.int('id')
    t.string('email')
  },
})

const PostCreateInput = inputObjectType({
  name: 'PostCreateInput',
  definition(t) {
    t.nonNull.string('title')
    t.string('content')
  },
})

const RoomCreateInput = inputObjectType({
  name: 'RoomCreateInput',
  definition(t) {
    t.nonNull.string('name')
    t.string('details')
  },
})

const CreateChatInput = inputObjectType({
  name: 'CreateChatInput',
  definition(t) {
    t.nonNull.int('roomId')
    t.string('content')
  }
})

const WithUserRoomCreateInput = inputObjectType({
  name: 'WithUserRoomCreateInput',
  definition(t) {
    t.int('chatwithId')
    t.nonNull.string('name')
    t.string('details')
  }
})

const UserCreateInput = inputObjectType({
  name: 'UserCreateInput',
  definition(t) {
    t.nonNull.string('email')
    t.string('name')
    t.list.nonNull.field('posts', { type: 'PostCreateInput' })
  },
})

const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token')
    t.field('user', { type: 'User'})
  },
})

const schemaWithoutPermissions = makeSchema({
  types: [
    Query,
    Mutation,
    Post,
    User,
    Room,
    Chat,
    AuthPayload,
    UserUniqueInput,
    UserCreateInput,
    PostCreateInput,
    RoomCreateInput,
    CreateChatInput,
    WithUserRoomCreateInput,
    SortOrder,
    PostOrderByUpdatedAtInput,
    DateTime,
  ],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})

export const schema = applyMiddleware(schemaWithoutPermissions, permissions)