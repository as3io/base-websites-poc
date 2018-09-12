const { Router } = require('express');
const { ApolloServer } = require('apollo-server-express');
const createSchema = require('../graphql/schema');

const router = Router();

const create = async () => {
  const schema = await createSchema();
  const server = new ApolloServer({ schema, playground: false });
  server.applyMiddleware({ app: router, path: '/' });
};

create().catch((e) => {
  setImmediate(() => {
    throw e;
  });
});

module.exports = router;
