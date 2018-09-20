import React from 'react';
import PropTypes from 'prop-types';

const BS4 = 'card';
const BEM = `content content--card ${BS4}`;

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
  <Tag className={className ? `${BEM} ${className}` : BEM}>
    {children}
  </Tag>
);

Card.displayName = displayName;
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
