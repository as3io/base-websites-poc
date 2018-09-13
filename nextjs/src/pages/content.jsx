import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from '../layouts/Default';
import checkContent from '../lib/check-content';
import createMarkup from '../lib/create-markup';

import contentPage from '../gql/queries/content-page.graphql';

const ContentPage = ({ content }) => (
  <DefaultLayout>
    <article>
      <h1>{content.name}</h1>
      <h5>{content.teaser}</h5>
      <hr />
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={createMarkup(content.body)} />
    </article>
  </DefaultLayout>
);

ContentPage.getInitialProps = async (ctx) => {
  const { query, apollo } = ctx;
  const { id } = query;
  const input = { id };
  const variables = { input };


  const result = await apollo.query({ query: contentPage, variables });
  const { data } = result;
  const { platformContent } = data;

  // Check content for internal/external redirects, etc.
  checkContent(platformContent, ctx);
  return { content: platformContent };
};

ContentPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object.isRequired,
};

export default ContentPage;
