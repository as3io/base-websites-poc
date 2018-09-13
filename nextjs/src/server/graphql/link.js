const { HttpLink } = require('apollo-link-http');
const { ApolloLink } = require('apollo-link');
const { setContext } = require('apollo-link-context');
const fetch = require('isomorphic-unfetch');
const env = require('../env');

const { GRAPHQL_URL, TENANT_KEY, GRAPHQL_TOKEN } = env;

module.exports = ApolloLink.from([
  /**
   *
   */
  setContext(() => ({
    headers: { authorization: `Bearer ${GRAPHQL_TOKEN}`, 'x-tenant-key': TENANT_KEY },
  })),

  /**
   *
   */
  new HttpLink({
    uri: GRAPHQL_URL,
    fetch,
  }),
]);
