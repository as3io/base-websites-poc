const { isArray } = Array;

/**
 * @todo This should use better error detection via ApolloError.
 * This requires Apollo Server 2.0, however.
 * @see https://www.apollographql.com/docs/apollo-server/features/errors.html
 *
 * @param {Error} e
 */
const is404 = (e) => {
  if (isArray(e.graphQLErrors) && e.graphQLErrors[0] && e.graphQLErrors[0].message) {
    return /^No [a-z]+\.[a-z]+ record found for ID/i.test(e.graphQLErrors[0].message);
  }
  return false;
};

export default is404;
