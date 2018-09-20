import React from 'react';
import PropTypes from 'prop-types';

import CoreLink from '../../../Core/Elements/Content/Link';

const BEM = 'content__short-name';

const displayName = 'Templates/Content/Elements/ShortNameLink';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  canonicalPath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  shortName: PropTypes.string.isRequired,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  children: null,
  className: null,
  tag: 'h5',
};

const ShortNameLink = ({
  children,
  className,
  canonicalPath,
  id,
  shortName,
  tag: Tag,
}) => (id && canonicalPath && (children || shortName) ? (
  <Tag className={className ? `${BEM} ${className}` : BEM}>
    <CoreLink contentId={id} asPath={canonicalPath} html={shortName}>
      {children}
    </CoreLink>
  </Tag>
) : null);

ShortNameLink.displayName = displayName;
ShortNameLink.propTypes = propTypes;
ShortNameLink.defaultProps = defaultProps;

export default ShortNameLink;
