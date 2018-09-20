import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const displayName = 'Templates/Content/Card/Body';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  overImage: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: null,
  overImage: false,
  tag: 'div',
};

const Body = ({
  children,
  className,
  overImage,
  tag: Tag,
}) => (
  <Tag className={classNames(!overImage ? 'card-body' : 'card-img-overlay d-flex flex-column', className)}>
    {overImage ? (
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
