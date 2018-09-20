import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const displayName = 'Templates/Content/ListGroup';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: null,
  tag: 'ul',
};

const ListGroup = ({
  children,
  className,
  tag: Tag,
}) => (
  <Tag className={classNames('list-group', className)}>
    {children}
  </Tag>
);

ListGroup.displayName = displayName;
ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;

export default ListGroup;
