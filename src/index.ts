import { context } from "./context";
import { ApolloServer } from "apollo-server";

import { schema } from "./schema";
export const server = new ApolloServer({
    schema,
    context,
})

const port = 3000;

server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})