import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';

export default (req) => {
  const headers = req ? req.headers : {};
  return {
    link: ApolloLink.from([
      setContext(() => ({
        headers: { authorization: 'Bearer 1fd5a684-2e95-43fe-b0da-861d78c6c567', 'x-tenant-key': 'cygnus_ofcr' },
      })),
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          // eslint-disable-next-line no-console
          graphQLErrors.map(({ message, locations, path }) => console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
        }
        // eslint-disable-next-line no-console
        if (networkError) console.error(`[Network error]: ${networkError}`);
      }),
      new HttpLink({
        uri: 'http://localhost:8937/graphql',
        headers,
        fetch,
      }),
    ]),
  };
};
