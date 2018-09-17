import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const SectionLinkElement = ({
  asPath,
  children,
  className,
  sectionAlias,
}) => (
  <Link href={`/section?alias=${sectionAlias}`} as={asPath}>
    <a className={className}>{children}</a>
  </Link>
);

SectionLinkElement.propTypes = {
  asPath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  sectionAlias: PropTypes.number.isRequired,
};

SectionLinkElement.defaultProps = {
  className: null,
};

export default SectionLinkElement;
