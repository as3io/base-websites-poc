import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const displayName = 'Templates/Content/Field';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: null,
  tag: 'span',
};

const Field = ({
  children,
  className,
  name,
  tag: Tag,
}) => (
  <Tag className={classNames(`content__${name}`, className)}>
    {children}
  </Tag>
);

Field.displayName = displayName;
Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Field;
