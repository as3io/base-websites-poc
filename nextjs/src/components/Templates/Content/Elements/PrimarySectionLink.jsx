import React from 'react';
import PropTypes from 'prop-types';

import CoreSectionLink from '../../../Core/Elements/Content/SectionLink';

const BEM = 'content__primary-section';

const displayName = 'Templates/Content/Elements/PrimarySectionLink';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  primarySection: PropTypes.shape({
    alias: PropTypes.string,
    name: PropTypes.string,
  }),
};

const defaultProps = {
  children: null,
  className: null,
  primarySection: {},
};

const PrimarySectionLink = ({
  children,
  className,
  primarySection,
}) => {
  const { name, alias } = primarySection || {};
  return (
    <CoreSectionLink
      className={className ? `${BEM} ${className}` : BEM}
      sectionAlias={alias}
    >
      {children || name}
    </CoreSectionLink>
  );
};

PrimarySectionLink.displayName = displayName;
PrimarySectionLink.propTypes = propTypes;
PrimarySectionLink.defaultProps = defaultProps;

export default PrimarySectionLink;
