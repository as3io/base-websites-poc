import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from '../Link';

const BEM = 'content__short-name';

const displayName = 'Templates/Content/Elements/ShortNameLink';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.shape({
    id: PropTypes.number,
    canonicalPath: PropTypes.string,
    shortName: PropTypes.string,
  }).isRequired,
  linkClassName: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: null,
  linkClassName: null,
  tag: 'h5',
  type: undefined,
};

const ShortNameLink = ({
  children,
  className,
  content,
  linkClassName,
  tag: Tag,
  type,
}) => {
  const { id, canonicalPath, shortName } = content || {};
  return (id && canonicalPath && (children || shortName) ? (
    <Tag className={classNames(BEM, className)}>
      <Link
        id={id}
        canonicalPath={canonicalPath}
        value={shortName}
        type={type}
        className={linkClassName}
        asHTML
      >
        {children}
      </Link>
    </Tag>
  ) : null);
};

ShortNameLink.displayName = displayName;
ShortNameLink.propTypes = propTypes;
ShortNameLink.defaultProps = defaultProps;

export default ShortNameLink;