import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const SectionTag = ({ sectionId, children, className }) => (
  <Link href={`/section?id=${sectionId}`}>
    <a className={className}>{children}</a>
  </Link>
);

SectionTag.propTypes = {
  className: PropTypes.string,
  sectionId: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

SectionTag.defaultProps = {
  className: null,
};

export default SectionTag;
