import React from 'react';
import PropTypes from 'prop-types';

import CoreSectionLinkElement from '../../../Core/Elements/Content/SectionLink';

const CLASS_NAME = 'content__section';

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

const ContentElementPrimarySectionLink = ({
  children,
  className,
  primarySection,
}) => {
  const { name, alias } = primarySection || {};
  return (
    <CoreSectionLinkElement
      className={className ? `${CLASS_NAME} ${className}` : CLASS_NAME}
      sectionAlias={alias}
    >
      {children || name}
    </CoreSectionLinkElement>
  );
};

ContentElementPrimarySectionLink.propTypes = propTypes;
ContentElementPrimarySectionLink.defaultProps = defaultProps;

export default ContentElementPrimarySectionLink;
