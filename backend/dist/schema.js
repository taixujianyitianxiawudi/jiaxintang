"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.schema = exports.DateTime = void 0;
var permissions_1 = require("./permissions");
var utils_1 = require("./utils");
var bcryptjs_1 = require("bcryptjs");
var jsonwebtoken_1 = require("jsonwebtoken");
var graphql_middleware_1 = require("graphql-middleware");
var nexus_1 = require("nexus");
var graphql_scalars_1 = require("graphql-scalars");
exports.DateTime = nexus_1.asNexusMethod(graphql_scalars_1.DateTimeResolver, 'date');
var Query = nexus_1.objectType({
    name: 'Query',
    definition: function (t) {
        t.nonNull.list.nonNull.field('allUsers', {
            type: 'User',
            resolve: function (_parent, _args, context) {
                return context.prisma.user.findMany();
            }
        });
        t.field('userPrivateRoom', {
            type: 'Room',
            args: {
                id: nexus_1.intArg()
            },
            resolve: function (_parent, args, context) {
                return context.prisma.room.findFirst({
                    where: {
                        ownerId: args.id,
                        public: false
                    }
                });
            }
        });
        t.nullable.field('me', {
            type: 'User',
            resolve: function (_parent, _args, context) {
                var userId = utils_1.getUserId(context);
                return context.prisma.user.findUnique({
                    where: {
                        id: Number(userId)
                    }
                });
            }
        });
        t.nonNull.list.nonNull.field('allRooms', {
            type: 'Room',
            resolve: function (_parent, _args, context) {
                return context.prisma.room.findMany({
                    where: { public: true },
                    orderBy: {
                        id: 'desc'
                    }
                });
            }
        });
        t.nonNull.list.nonNull.field('chatByRoomId', {
            type: 'Chat',
            args: {
                id: nexus_1.intArg()
            },
            resolve: function (_parent, args, context) {
                return context.prisma.chat.findMany({
                    where: { roomId: args.id },
                    take: -25,
                    orderBy: {
                        createdAt: 'asc'
                    }
                });
            }
        });
        t.nonNull.list.nonNull.field('chatByRoomIdandUser', {
            type: 'Chat',
            args: {
                id: nexus_1.intArg(),
                userid: nexus_1.intArg()
            },
            resolve: function (_parent, args, context) {
                var userId = utils_1.getUserId(context);
                return context.prisma.chat.findMany({
                    where: {
                        OR: [
                            {
                                roomId: args.id,
                                authorId: args.userid
                            },
                            {
                                roomId: args.id,
                                authorId: userId
                            },
                        ]
                    },
                    take: -25,
                    orderBy: {
                        createdAt: 'asc'
                    }
                });
            }
        });
        t.nonNull.list.nonNull.field('chatPrivate', {
            type: 'Chat',
            args: {
                id: nexus_1.intArg(),
                userid: nexus_1.intArg()
            },
            resolve: function (_parent, args, context) {
                var userId = utils_1.getUserId(context);
                return context.prisma.chat.findMany({
                    where: {
                        OR: [
                            {
                                touserId: userId,
                                authorId: args.userid
                            },
                            {
                                touserId: args.userid,
                                authorId: userId
                            },
                        ]
                    },
                    take: -25,
                    orderBy: {
                        createdAt: 'asc'
                    }
                });
            }
        });
        t.nullable.field('roomById', {
            type: 'Room',
            args: {
                id: nexus_1.intArg()
            },
            resolve: function (_parent, args, context) {
                return context.prisma.room.findUnique({
                    where: { id: args.id || undefined }
                });
            }
        });
    }
});
var Mutation = nexus_1.objectType({
    name: 'Mutation',
    definition: function (t) {
        var _this = this;
        t.field('signup', {
            type: 'AuthPayload',
            args: {
                name: nexus_1.stringArg(),
                email: nexus_1.nonNull(nexus_1.stringArg()),
                password: nexus_1.nonNull(nexus_1.stringArg())
            },
            resolve: function (_parent, args, context) { return __awaiter(_this, void 0, void 0, function () {
                var hashedPassword, user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, bcryptjs_1.hash(args.password, 10)];
                        case 1:
                            hashedPassword = _a.sent();
                            return [4 /*yield*/, context.prisma.user.create({
                                    data: {
                                        name: args.name,
                                        email: args.email,
                                        password: hashedPassword
                                    }
                                })];
                        case 2:
                            user = _a.sent();
                            return [4 /*yield*/, context.prisma.room.create({
                                    data: {
                                        public: false,
                                        ownerId: user.id,
                                        name: args.name + "'s private room"
                                    }
                                })];
                        case 3:
                            _a.sent();
                            return [2 /*return*/, {
                                    token: jsonwebtoken_1.sign({ userId: user.id }, utils_1.APP_SECRET),
                                    user: user
                                }];
                    }
                });
            }); }
        });
        t.field('login', {
            type: 'AuthPayload',
            args: {
                email: nexus_1.nonNull(nexus_1.stringArg()),
                password: nexus_1.nonNull(nexus_1.stringArg())
            },
            resolve: function (_parent, _a, context) {
                var email = _a.email, password = _a.password;
                return __awaiter(_this, void 0, void 0, function () {
                    var user, passwordValid;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, context.prisma.user.findUnique({
                                    where: {
                                        email: email
                                    }
                                })];
                            case 1:
                                user = _b.sent();
                                if (!user) {
                                    throw new Error("No user found for email: " + email);
                                }
                                return [4 /*yield*/, bcryptjs_1.compare(password, user.password)];
                            case 2:
                                passwordValid = _b.sent();
                                if (!passwordValid) {
                                    throw new Error('Invalid password');
                                }
                                return [2 /*return*/, {
                                        token: jsonwebtoken_1.sign({ userId: user.id }, utils_1.APP_SECRET),
                                        user: user
                                    }];
                        }
                    });
                });
            }
        });
        t.field('createChat', {
            type: 'Chat',
            args: {
                data: nexus_1.nonNull(nexus_1.arg({
                    type: 'CreateChatInput'
                }))
            },
            resolve: function (_, args, context) {
                var userId = utils_1.getUserId(context);
                return context.prisma.chat.create({
                    data: {
                        roomId: args.data.roomId,
                        authorId: userId,
                        content: args.data.content
                    }
                });
            }
        });
        t.field('createChatPrivate', {
            type: 'Chat',
            args: {
                data: nexus_1.nonNull(nexus_1.arg({
                    type: 'CreateChatInputPrivate'
                }))
            },
            resolve: function (_, args, context) {
                var userId = utils_1.getUserId(context);
                return context.prisma.chat.create({
                    data: {
                        roomId: args.data.roomId,
                        authorId: userId,
                        content: args.data.content,
                        touserId: args.data.touserId
                    }
                });
            }
        });
        t.field('createRoom', {
            type: 'Room',
            args: {
                data: nexus_1.nonNull(nexus_1.arg({
                    type: 'RoomCreateInput'
                }))
            },
            resolve: function (_, args, context) {
                var userId = utils_1.getUserId(context);
                return context.prisma.room.create({
                    data: {
                        name: args.data.name,
                        details: args.data.details,
                        ownerId: userId,
                        public: true
                    }
                });
            }
        });
        t.field('incrementRoomUser', {
            type: 'Room',
            args: {
                id: nexus_1.nonNull(nexus_1.intArg())
            },
            resolve: function (_, args, context) {
                return context.prisma.room.update({
                    where: { id: args.id || undefined },
                    data: {
                        currentNumberofUsers: {
                            increment: 1
                        }
                    }
                });
            }
        });
        t.field('decrementRoomUser', {
            type: 'Room',
            args: {
                id: nexus_1.nonNull(nexus_1.intArg())
            },
            resolve: function (_, args, context) {
                return context.prisma.room.update({
                    where: { id: args.id || undefined },
                    data: {
                        currentNumberofUsers: {
                            decrement: 1
                        }
                    }
                });
            }
        });
        t.field('deleteRoom', {
            type: 'Room',
            args: {
                id: nexus_1.nonNull(nexus_1.intArg())
            },
            resolve: function (_, args, context) {
                return context.prisma.room["delete"]({
                    where: { id: args.id }
                });
            }
        });
    }
});
var User = nexus_1.objectType({
    name: 'User',
    definition: function (t) {
        t.nonNull.int('id');
        t.string('name');
        t.nonNull.string('email');
        t.nonNull.boolean('isOnline');
        t.nonNull.list.nonNull.field('rooms', {
            type: 'Room',
            resolve: function (parent, _, context) {
                return context.prisma.user
                    .findUnique({
                    where: {
                        id: parent.id || undefined
                    }
                })
                    .rooms();
            }
        });
        t.nonNull.list.nonNull.field('chats', {
            type: 'Chat',
            resolve: function (parent, _, context) {
                return context.prisma.user
                    .findUnique({
                    where: { id: parent.id || undefined }
                })
                    .chats();
            }
        });
        t.nonNull.list.nonNull.field('getchated', {
            type: 'Chat',
            resolve: function (parent, _, context) {
                return context.prisma.user
                    .findUnique({
                    where: { id: parent.id || undefined }
                })
                    .getchated();
            }
        });
    }
});
var Chat = nexus_1.objectType({
    name: 'Chat',
    definition: function (t) {
        t.nonNull.int('id');
        t.nonNull.field('createdAt', { type: 'DateTime' });
        t.string('content');
        t.nonNull.boolean('viewed');
        t.field('room', {
            type: 'Room',
            resolve: function (parent, _, context) {
                return context.prisma.chat
                    .findUnique({
                    where: { id: parent.id || undefined }
                })
                    .room();
            }
        });
        t.field('author', {
            type: 'User',
            resolve: function (parent, _, context) {
                return context.prisma.chat
                    .findUnique({
                    where: { id: parent.id || undefined }
                })
                    .author();
            }
        });
        t.field('touser', {
            type: 'User',
            resolve: function (parent, _, context) {
                return context.prisma.chat
                    .findUnique({
                    where: { id: parent.id || undefined }
                })
                    .touser();
            }
        });
    }
});
var Room = nexus_1.objectType({
    name: 'Room',
    definition: function (t) {
        t.nonNull.int('id');
        t.nonNull.field('createdAt', { type: 'DateTime' });
        t.nonNull.string('name');
        t.string('details');
        t.nonNull.boolean('public');
        t.nonNull.int('currentNumberofUsers');
        t.nonNull.list.nonNull.field('chats', {
            type: 'Chat',
            resolve: function (parent, _, context) {
                return context.prisma.room
                    .findUnique({
                    where: { id: parent.id || undefined }
                })
                    .chats();
            }
        });
        t.field('owner', {
            type: 'User',
            resolve: function (parent, _, context) {
                return context.prisma.room
                    .findUnique({
                    where: { id: parent.id || undefined }
                })
                    .owner();
            }
        });
    }
});
var SortOrder = nexus_1.enumType({
    name: 'SortOrder',
    members: ['asc', 'desc']
});
var UserUniqueInput = nexus_1.inputObjectType({
    name: 'UserUniqueInput',
    definition: function (t) {
        t.int('id');
        t.string('email');
    }
});
var RoomCreateInput = nexus_1.inputObjectType({
    name: 'RoomCreateInput',
    definition: function (t) {
        t.nonNull.string('name');
        t.string('details');
        t.int('ownerId');
        t.nonNull.boolean('public');
    }
});
var CreateChatInput = nexus_1.inputObjectType({
    name: 'CreateChatInput',
    definition: function (t) {
        t.nonNull.int('roomId');
        t.string('content');
    }
});
var CreateChatInputPrivate = nexus_1.inputObjectType({
    name: 'CreateChatInputPrivate',
    definition: function (t) {
        t.nonNull.int('roomId');
        t.string('content');
        t.int('touserId');
    }
});
var AuthPayload = nexus_1.objectType({
    name: 'AuthPayload',
    definition: function (t) {
        t.string('token');
        t.field('user', { type: 'User' });
    }
});
var schemaWithoutPermissions = nexus_1.makeSchema({
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
        exports.DateTime,
    ],
    outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts'
    },
    contextType: {
        module: require.resolve('./context'),
        "export": 'Context'
    },
    sourceTypes: {
        modules: [
            {
                module: '@prisma/client',
                alias: 'prisma'
            },
        ]
    }
});
exports.schema = graphql_middleware_1.applyMiddleware(schemaWithoutPermissions, permissions_1.permissions);
