import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const displayName = 'Templates/Content/Card';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: null,
  tag: 'div',
};

const Card = ({
  children,
  className,
  tag: Tag,
}) => (
  <Tag className={classNames('content', 'content--card', 'card', className)}>
    {children}
  </Tag>
);

Card.displayName = displayName;
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
