import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';
import { graphTenant, graphToken } from '../site-config.json';

export default (req) => {
  const headers = req ? req.headers : {};
  return {
    link: ApolloLink.from([
      setContext(() => ({
        headers: { authorization: `Bearer ${graphToken}`, 'x-tenant-key': graphTenant },
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
