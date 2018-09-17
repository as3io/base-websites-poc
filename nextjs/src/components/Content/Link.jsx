import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ContentLink = ({
  id,
  canonicalPath,
  children,
  className,
}) => (
  <Link href={`/content?id=${id}`} as={canonicalPath}>
    <a className={className}>{children}</a>
  </Link>
);

ContentLink.propTypes = {
  id: PropTypes.number.isRequired,
  canonicalPath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ContentLink.defaultProps = {
  className: null,
};

export default ContentLink;
