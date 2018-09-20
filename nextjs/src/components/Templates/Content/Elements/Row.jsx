import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const displayName = 'Templates/Content/Elements/Row';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: null,
  tag: 'div',
};

const Row = ({
  children,
  className,
  tag: Tag,
}) => (
  <Tag className={classNames('content__element-row', className)}>
    {children}
  </Tag>
);

Row.displayName = displayName;
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
