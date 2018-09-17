import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ContentLink = ({ id, canonicalPath, children }) => (
  <Link href={`/content?id=${id}`} as={canonicalPath}>
    <a>{children}</a>
  </Link>
);

ContentLink.propTypes = {
  id: PropTypes.number.isRequired,
  canonicalPath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ContentLink;
