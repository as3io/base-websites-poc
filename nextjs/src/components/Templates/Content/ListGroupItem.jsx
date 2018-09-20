import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
  <Tag className={classNames('content', 'content--list-item', 'list-group-item', className)}>
    {children}
  </Tag>
);

ListGroupItem.displayName = displayName;
ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem;
