import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CoreSectionLink from '../../../Core/Elements/Content/SectionLink';

const displayName = 'Templates/Content/Elements/PrimarySectionLink';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  primarySection: PropTypes.shape({
    alias: PropTypes.string,
    name: PropTypes.string,
  }),
  tag: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: null,
  primarySection: {},
  tag: 'span',
};

const PrimarySectionLink = ({
  children,
  className,
  primarySection,
  tag: Tag,
}) => {
  const { name, alias } = primarySection || {};
  return alias && (children || name) ? (
    <Tag className={classNames('content__primary-section', className)}>
      <CoreSectionLink className="section__link" sectionAlias={alias}>
        {children || name}
      </CoreSectionLink>
    </Tag>
  ) : null;
};

PrimarySectionLink.displayName = displayName;
PrimarySectionLink.propTypes = propTypes;
PrimarySectionLink.defaultProps = defaultProps;

export default PrimarySectionLink;
