import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import DefaultLayout from '../layouts/Default';
import checkContent from '../lib/check-content';

import contentPage from '../gql/queries/content-page.graphql';

const createMarkup = html => ({ __html: html });

const ContentPage = ({ id }) => {
  const input = { id };
  return (
    <DefaultLayout>
      <Query query={contentPage} variables={{ input }}>
        {({ loading, error, data }) => {
          if (loading) return <span>Loading...</span>;
          if (error) return <span>{error.message}</span>;
          const { platformContent } = data;
          return (
            <article>
              <h1>{platformContent.name}</h1>
              <h5>{platformContent.teaser}</h5>
              <hr />
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={createMarkup(platformContent.body)} />
            </article>
          );
        }}
      </Query>
    </DefaultLayout>
  );
};

ContentPage.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { id } = query;
  // Check content for internal/external redirects, etc.
  await checkContent(id, ctx);
  return { id };
};

ContentPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ContentPage;
