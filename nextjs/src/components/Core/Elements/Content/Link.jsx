import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import contentHref from '../../../../lib/content-paths';

const ContentLinkElement = ({
  asPath,
  children,
  className,
  contentId,
}) => (
  <Link href={contentHref(contentId)} as={asPath}>
    <a className={className}>{children}</a>
  </Link>
);

ContentLinkElement.propTypes = {
  asPath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  contentId: PropTypes.number.isRequired,
};

ContentLinkElement.defaultProps = {
  className: null,
};

export default ContentLinkElement;