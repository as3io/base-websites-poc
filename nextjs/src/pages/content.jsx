import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from '../layouts/Default';
import checkContent from '../lib/check-content';
import createMarkup from '../lib/create-markup';
import is404 from '../lib/is-404';

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
  const { query, apollo, res } = ctx;
  const { id } = query;
  const input = { id };
  const variables = { input };

  try {
    // @todo Should this be a watch query?
    const { data } = await apollo.query({ query: contentPage, variables });
    const { platformContent } = data;

    // Check content for internal/external redirects, etc.
    checkContent(platformContent, ctx);
    return { content: platformContent };
  } catch (e) {
    if (res) res.statusCode = 500;
    if (is404(e)) {
      e.code = 'ENOENT';
      if (res) res.statusCode = 404;
    }
    throw e;
  }
};

ContentPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object.isRequired,
};

export default ContentPage;
