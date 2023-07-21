import { makeSchema } from "nexus";
import { join } from 'path'
// You are importing the graphql model which exports the Link object type through index.ts. The import is named types
import * as types from "./graphql";

export const schema = makeSchema({
    // Your GraphQL schema will consist of many types that you will pass as an array to the types object. For now, it is intentionally kept empty.
    // You are passing types to the makeSchema function. Nexus will do its thing to generate the SDL from this.
    types,
    outputs: {
        // The first output file that Nexus will generate for you is a GraphQL schema file of type .graphql. This is the GraphQL Schema Definition Language (SDL) for defining the structure of your API.
        schema: join(process.cwd(), "schema.graphql"),
        // The second output file is a TypeScript file known as typegen, which will contain TypeScript type definitions for all types in your GraphQL schema. These generated types will help ensure typesafety in your application code and keep your GraphQL schema definition in sync with your schema implementation.
        typegen: join(process.cwd(), "nexus-typegen.ts"),
    },
})