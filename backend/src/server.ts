import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'
import { config } from 'dotenv'
import { resolve } from "path"



config({ path: resolve(__dirname, "../.env") });

const server = new ApolloServer({
  schema: schema,
  context: createContext,
});

server.listen().then(async ({ url }) => {
  console.log(`\
🚀 Server ready at: ${url}
⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api
  `)
});