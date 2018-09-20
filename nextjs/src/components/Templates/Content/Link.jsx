import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CoreLink from '../../Core/Elements/Content/Link';

const displayName = 'Templates/Content/Link';

const propTypes = {
  asHTML: PropTypes.bool,
  canonicalPath: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string,
};

const defaultProps = {
  asHTML: false,
  canonicalPath: '',
  children: null,
  className: null,
  id: null,
  type: 'primary',
};

const Link = ({
  asHTML,
  canonicalPath,
  children,
  className,
  id,
  type,
}) => {
  const linkType = type || defaultProps.type;
  const textClass = linkType !== 'primary' ? `text-${linkType}` : null;
  const html = asHTML && typeof children === 'string' ? children : null;
  return (
    <CoreLink
      className={classNames('content__link', className, textClass)}
      contentId={id}
      asPath={canonicalPath}
      html={html}
    >
      {html ? null : children}
    </CoreLink>
  );
};

Link.displayName = displayName;
Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
