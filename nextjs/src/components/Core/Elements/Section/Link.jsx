import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { sectionAsPath, sectionHref } from '../../../../lib/section-paths';

const SectionLinkElement = ({
  children,
  className,
  sectionAlias,
}) => (
  <Link href={sectionHref(sectionAlias)} as={sectionAsPath(sectionAlias)}>
    <a className={className}>{children}</a>
  </Link>
);

SectionLinkElement.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  sectionAlias: PropTypes.string.isRequired,
};

SectionLinkElement.defaultProps = {
  className: null,
};

export default SectionLinkElement;
