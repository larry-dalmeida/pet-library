const { ApolloServer } = require("apollo-server");

const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");
const dataSources = require("./src/dataSources");

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
