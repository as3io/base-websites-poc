import query from '../gql/queries/check-content.graphql';
import redirect from './redirect';

export default async (id, { apollo, req, res }) => {
  if (req) {
    // Run on server only.
    console.info('checking content...');
    const input = { id };
    const variables = { input };
    try {
      const { data } = await apollo.query({ query, variables });
      const { platformContent } = data;
      const { redirectTo } = platformContent;
      if (redirectTo) {
        console.info('redirecting externally...');
        redirect(res, redirectTo);
      }
    } catch (e) {
      console.info('ERROR', e);
    }
  }
};
