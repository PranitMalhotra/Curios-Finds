# GraphQL
![Alt text](images/image.png)
### Introduction
![Alt text](images/image-1.png)
![Alt text](images/image-2.png)
![Alt text](images/image-3.png)
![Alt text](images/image-4.png)
![Alt text](images/image-5.png)
![Alt text](images/image-6.png)

### Benefits of using GraphQL over REST
![Alt text](images/image-7.png)
![Alt text](images/image-8.png)
![Alt text](images/image-9.png)
![Alt text](images/image-10.png)

### Core Concepts
![Alt text](images/image-11.png)
#### ! means that the field is required.
![Alt text](images/image-12.png)
#### Defined a one to many relation between person and post.
![Alt text](images/image-13.png)

### Mutations
![Alt text](images/image-14.png)
- You can receive data while sending it as well.
![Alt text](images/image-15.png)

### Subscriptions
![Alt text](images/image-16.png)
![Alt text](images/image-17.png)
![Alt text](images/image-19.png)

### Architecture
![Alt text](images/image-20.png)
![Alt text](images/image-21.png)
![Alt text](images/image-22.png)
![Alt text](images/image-23.png)

### Resolver Function
![Alt text](images/image-24.png)

### GraphQL Clients
![Alt text](images/image-25.png)

### Imperative and Declarative
![Alt text](images/image-26.png)
![Alt text](images/image-27.png)

### Getting Started
- package.json is the configuration file for the Node.js app you’re building. It lists all dependencies and other configuration options (such as scripts) needed for the app.
- ts-node-dev, which will enable you to transpile your TS files on the fly and restart your API on changes.
- Setting "strict": true enables a wide range of type checking behavior that results in more type-safe programs.
- apollo-server is a fully-featured GraphQL server. It is based on Express.js and a few other libraries to help you build production-ready GraphQL servers.
- Nexus is a library to create type-safe GraphQL schemas with a code-first approach (since you write standard JavaScript/TypeScript code to define what your schema will look like, hence “code-first”).
- At the core of every GraphQL API, there is a GraphQL schema.
- Every GraphQL schema has three special root types: Query, Mutation, and Subscription. The root types correspond to the three operation types offered by GraphQL: queries, mutations, and subscriptions. The fields on these root types are called root fields and define the available API operations.

#### GraphQL Schema
- Scalar types are the most basic types in a GraphQL schema, with no sub-fields of their own. 
- They are similar to the primitive types in programming languages. 
- GraphQL comes with a 5 default scalar types out of the box: Int, Float, String, Boolean and ID.
- However, when querying an object type, it is required that you query at least one of its fields in a selection set.
- When the type of a root field is an object type, you can further expand the query (or mutation/subscription) with fields of that object type. The expanded part is called the selection set.
- For the fields in the selection set, it doesn’t matter whether the type of the root field is required or a list.