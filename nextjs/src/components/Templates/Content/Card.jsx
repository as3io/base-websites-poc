import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const displayName = 'Templates/Content/Card';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string.isRequired,
};

const defaultProps = {
  className: null,
  tag: 'div',
};

const Card = ({
  children,
  className,
  id,
  tag: Tag,
  type,
}) => (
  <Tag data-id={id} className={classNames('content', 'content--card', `content--${type}`, 'card', className)}>
    {children}
  </Tag>
);

Card.displayName = displayName;
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
