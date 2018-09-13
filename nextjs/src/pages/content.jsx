import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from '../layouts/Default';
import checkContent from '../lib/check-content';
import createMarkup from '../lib/create-markup';
import is404 from '../lib/is-404';
import RelCanonical from '../components/Content/RelCanonical';

import contentPage from '../gql/queries/content-page.graphql';

const ContentPage = ({ content, origin }) => (
  <DefaultLayout>
    <RelCanonical origin={origin} pathname={content.canonicalPath} />
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
  const {
    query,
    apollo,
    res,
    req,
  } = ctx;
  const { id } = query;
  const input = { id };
  const variables = { input };

  // @todo Make this a HOC for all pages.
  const origin = req ? `${req.protocol}://${req.get('host')}` : `${window.location.protocol}//${window.location.host}`;

  try {
    // @todo Should this be a watch query?
    // @todo Should page-level queries be consolidated for re-use across all pages?
    const { data } = await apollo.query({ query: contentPage, variables });
    const { platformContent } = data;

    // Check content for internal/external redirects, etc.
    checkContent(platformContent, ctx);
    return { content: platformContent, origin };
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
  origin: PropTypes.string.isRequired,
};

export default ContentPage;
