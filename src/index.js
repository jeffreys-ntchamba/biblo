const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema.graphql");
const resolvers = require("./resolvers/index");
const express = require("express");
const app = express();
const { prisma } = require("./generated/prisma-client");
const { makeExecutableSchema } = require("graphql-tools");
const { storeUpload } = require("./helpers/uploader");
const bodyParser = require("body-parser");
const { graphqlUploadExpress } = require("graphql-upload");
const schema = new makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({
    uploads:false,
  schema,
  context: (request) => ({...request, prisma, storeUpload }),
  playground: true,
  introspection:true
});
app.use(graphqlUploadExpress())
app.use('/uploads',express.static("uploads"))
server.applyMiddleware({app,bodyParser:bodyParser.json()})
app.listen(process.env.PORT || 4000,()=> console.log("server is listening "))