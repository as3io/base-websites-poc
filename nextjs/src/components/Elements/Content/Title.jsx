import React from 'react';
import PropTypes from 'prop-types';

import HTMLElement from '../HTML';
import ContentLink from './Link';

const ContentTitleElement = ({
  asPath,
  contentId,
  className,
  linkClassName,
  tag,
  title,
}) => {
  if (!asPath) return <HTMLElement tag={tag} className={className} html={title} />;
  return (
    <ContentLink className={linkClassName} contentId={contentId} asPath={asPath}>
      <HTMLElement tag={tag} className={className} html={title} />
    </ContentLink>
  );
};

ContentTitleElement.propTypes = {
  asPath: PropTypes.string,
  contentId: PropTypes.number.isRequired,
  className: PropTypes.string,
  linkClassName: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  title: PropTypes.string.isRequired,
};

ContentTitleElement.defaultProps = {
  asPath: null,
  className: null,
  linkClassName: null,
  tag: null,
};

export default ContentTitleElement;
