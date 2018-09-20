import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const displayName = 'Templates/Content/Card/Body';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  overlay: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: null,
  overlay: false,
  tag: 'div',
};

const Body = ({
  children,
  className,
  overlay,
  tag: Tag,
}) => (
  <Tag className={classNames(!overlay ? 'card-body' : 'card-img-overlay d-flex flex-column', className)}>
    {overlay ? (
      <div className="mt-auto">
        {children}
      </div>
    ) : children}
  </Tag>
);

Body.displayName = displayName;
Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

export default Body;
