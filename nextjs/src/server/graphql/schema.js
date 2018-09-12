const { HttpLink } = require('apollo-link-http');
const { ApolloLink } = require('apollo-link');
const { setContext } = require('apollo-link-context');
const fetch = require('isomorphic-unfetch');
const {
  makeRemoteExecutableSchema,
  introspectSchema,
} = require('graphql-tools');
const env = require('../env');

const { GRAPHQL_URL, TENANT_KEY, GRAPHQL_TOKEN } = env;

const link = ApolloLink.from([
  setContext(() => ({
    headers: { authorization: `Bearer ${GRAPHQL_TOKEN}`, 'x-tenant-key': TENANT_KEY },
  })),
  new HttpLink({
    uri: GRAPHQL_URL,
    fetch,
  }),
]);
console.info(link);

let promise;
module.exports = async () => {
  const build = async () => {
    const schema = await introspectSchema(link);
    return makeRemoteExecutableSchema({
      schema,
      link,
    });
  };
  if (!promise) {
    // This will cache the schema and would require a reload of the app if it changes.
    promise = build();
  }
  return promise;
};
