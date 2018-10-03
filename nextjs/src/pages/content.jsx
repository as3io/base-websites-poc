import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultLayout from '../layouts/Default';
import checkContent from '../lib/check-content';
import createMarkup from '../lib/create-markup';
import errors from '../lib/errors';
import RelCanonical from '../components/Content/RelCanonical';

import contentPage from '../gql/queries/content-page.graphql';

const ContentPage = ({ content, origin }) => (
  <DefaultLayout>
    <RelCanonical origin={origin} pathname={content.canonicalPath} />
    <article data-id={content.id} className={classNames('content', 'content--display', `content--${content.type}`)}>
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
    req,
  } = ctx;
  const { id } = query;
  const input = { id: Number(id) };
  const variables = { input };

  // @todo Make this a HOC for all pages.
  const origin = req ? `${req.protocol}://${req.get('host')}` : `${window.location.protocol}//${window.location.host}`;

  // @todo Should this be a watch query?
  // @todo Should page-level queries be consolidated for re-use across all pages?
  // @todo Do we still need try/catch?
  const { data } = await apollo.query({ query: contentPage, variables });
  const { platformContent } = data;
  if (!platformContent) {
    throw errors.notFound();
  }
  // Check content for internal/external redirects, etc.
  checkContent(platformContent, ctx);
  return { content: platformContent, origin };
};

ContentPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object.isRequired,
  origin: PropTypes.string.isRequired,
};

export default ContentPage;
