import React from 'react';
import PropTypes from 'prop-types';

const BS4 = 'list-group-item';
const BEM = `content content--list-item ${BS4}`;

const displayName = 'Templates/Content/ListGroupItem';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: null,
  tag: 'li',
};

const ListGroupItem = ({
  children,
  className,
  tag: Tag,
}) => (
  <Tag className={className ? `${BEM} ${className}` : BEM}>
    {children}
  </Tag>
);

ListGroupItem.displayName = displayName;
ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem;
