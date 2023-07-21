import { ApolloServer } from "apollo-server";

//The schema object you created using Nexus defines your GraphQL schema. You need to provide this when instantiating your server since that’s how Apollo Server knows which API operations to support in the GraphQL API.
import { schema } from "./schema";
export const server = new ApolloServer({
    schema,
})

const port = 3000;

// You start the server and specify the port. After the server starts, it returns a url string inside a promise.
server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})