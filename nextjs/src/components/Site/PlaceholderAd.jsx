import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.string.isRequired,
};

const defaultProps = {
  className: null,
};

const PlaceholderAd = ({ className, size }) => (
  <div className={classNames('card', className)}>
    <div className="card-body text-center">
      <img src={`https://dummyimage.com/${size}/ccc/000`} alt={`${size} Advertisement`} />
    </div>
  </div>
);

PlaceholderAd.propTypes = propTypes;
PlaceholderAd.defaultProps = defaultProps;

export default PlaceholderAd;
