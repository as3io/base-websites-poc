import React from 'react';
import classNames from 'classnames';

import { withPlatformContent, withPlatformContentPropTypes } from '../core/WithPlatformContent';
import DefaultLayout from '../layouts/Default';
import createMarkup from '../core/utils/create-markup';


const ContentPage = ({ content }) => (
  <DefaultLayout>
    <article data-id={content.id} className={classNames('content', 'content--display', `content--${content.type}`)}>
      <h1>{content.name}</h1>
      <h5>{content.teaser}</h5>
      <hr />
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={createMarkup(content.body)} />
    </article>
  </DefaultLayout>
);

ContentPage.propTypes = {
  // Apply the `withPlatformContent` prop types
  ...withPlatformContentPropTypes,
};

export default withPlatformContent(ContentPage);
