"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.createContext = void 0;
var client_1 = require("@prisma/client");
var apollo_server_1 = require("apollo-server");
var prisma = new client_1.PrismaClient();
var pubsub = new apollo_server_1.PubSub();
function createContext(req) {
    return __assign(__assign({}, req), { prisma: prisma,
        pubsub: pubsub });
}
exports.createContext = createContext;
