import { PrismaClient } from '@prisma/client'
import { PubSub } from 'apollo-server'

export interface Context {
  prisma: PrismaClient
  req: any // HTTP request carrying the `Authorization` header
  pubsub: PubSub
}

const prisma = new PrismaClient()
const pubsub = new PubSub()

export function createContext(req: any) {
  return {
    ...req,
    prisma,
    pubsub,
  }
}
