const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { db } = require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
    Mutation
  },
  context: {
    db
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is running on this ${url}`);
});
