import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CoreLink from '../../Core/Elements/Content/Link';

const BEM = 'content__link';

const displayName = 'Templates/Content/Link';

const propTypes = {
  asHTML: PropTypes.bool,
  canonicalPath: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.node,
};

const defaultProps = {
  asHTML: false,
  canonicalPath: '',
  children: null,
  className: null,
  id: null,
  type: 'primary',
  value: null,
};

const Link = ({
  asHTML,
  canonicalPath,
  children,
  className,
  id,
  type,
  value,
}) => {
  const linkType = type || defaultProps.type;
  const textClass = linkType !== 'primary' ? `text-${linkType}` : null;
  return (
    <CoreLink
      className={classNames(BEM, className, textClass)}
      contentId={id}
      asPath={canonicalPath}
      html={asHTML ? value : null}
    >
      {asHTML ? children : children || value}
    </CoreLink>
  );
};

Link.displayName = displayName;
Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
