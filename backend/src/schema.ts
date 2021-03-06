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

    t.field('userPrivateRoom', {
      type: 'Room',
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.room.findFirst({
          where: {
            ownerId: args.id,
            public: false,
          },
        })
      },
    })

    t.nullable.field('me', {
      type: 'User',
      resolve: (_parent, _args, context: Context) => {
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
          where: { public: true },
          orderBy: {
            id: 'desc',
          },
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
          take: -25,
          orderBy: {
            createdAt: 'asc',
          },
        })
      },
    })

    t.nonNull.list.nonNull.field('chatByRoomIdandUser', {
      type: 'Chat',
      args: {
        id: intArg(),
        userid: intArg(),
      },
      resolve: (_parent, args, context: Context) => {
        const userId = getUserId(context)
        return context.prisma.chat.findMany({
          where: {
            OR: [
              {
                roomId: args.id,
                authorId: args.userid,
              },
              {
                roomId: args.id,
                authorId: userId,
              },
            ],
          },
          take: -25,
          orderBy: {
            createdAt: 'asc',
          },
        })
      },
    })

    t.nonNull.list.nonNull.field('chatPrivate', {
      type: 'Chat',
      args: {
        id: intArg(),
        userid: intArg(),
      },
      resolve: (_parent, args, context: Context) => {
        const userId = getUserId(context)
        return context.prisma.chat.findMany({
          where: {
            OR: [
              {
                touserId: userId,
                authorId: args.userid,
              },
              {
                touserId: args.userid,
                authorId: userId,
              },
            ],
          },
          take: -25,
          orderBy: {
            createdAt: 'asc',
          },
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
          where: { id: args.id || undefined },
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
        await context.prisma.room.create({
          data: {
            public: false,
            ownerId: user.id,
            name: args.name + "'s private room",
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
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
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

    t.field('createChatPrivate', {
      type: 'Chat',
      args: {
        data: nonNull(
          arg({
            type: 'CreateChatInputPrivate',
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
            touserId: args.data.touserId,
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
            public: true,
          },
        })
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
    t.nonNull.list.nonNull.field('rooms', {
      type: 'Room',
      resolve: (parent, _, context: Context) => {
        return context.prisma.user
          .findUnique({
            where: {
              id: parent.id || undefined,
            },
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
    t.nonNull.list.nonNull.field('getchated', {
      type: 'Chat',
      resolve: (parent, _, context: Context) => {
        return context.prisma.user
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .getchated()
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
    t.field('touser', {
      type: 'User',
      resolve: (parent, _, context: Context) => {
        return context.prisma.chat
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .touser()
      },
    })
  },
})

const Room = objectType({
  name: 'Room',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.nonNull.string('name')
    t.string('details')
    t.nonNull.boolean('public')
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
      },
    })
  },
})

const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

const UserUniqueInput = inputObjectType({
  name: 'UserUniqueInput',
  definition(t) {
    t.int('id')
    t.string('email')
  },
})

const RoomCreateInput = inputObjectType({
  name: 'RoomCreateInput',
  definition(t) {
    t.nonNull.string('name')
    t.string('details')
    t.int('ownerId')
    t.nonNull.boolean('public')
  },
})

const CreateChatInput = inputObjectType({
  name: 'CreateChatInput',
  definition(t) {
    t.nonNull.int('roomId')
    t.string('content')
  },
})

const CreateChatInputPrivate = inputObjectType({
  name: 'CreateChatInputPrivate',
  definition(t) {
    t.nonNull.int('roomId')
    t.string('content')
    t.int('touserId')
  },
})

const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token')
    t.field('user', { type: 'User' })
  },
})

const schemaWithoutPermissions = makeSchema({
  types: [
    Query,
    Mutation,
    User,
    Room,
    Chat,
    AuthPayload,
    UserUniqueInput,
    RoomCreateInput,
    CreateChatInput,
    CreateChatInputPrivate,
    SortOrder,
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
