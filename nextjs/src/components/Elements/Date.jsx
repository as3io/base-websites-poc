import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const formatValue = (value, format) => {
  if (!value) return '';
  const date = moment(value);
  if (!date.isValid()) return '';
  return moment(value).format(format);
};

const DateElement = ({ className, format, value }) => (
  <span className={className}>{formatValue(value, format)}</span>
);

DateElement.propTypes = {
  className: PropTypes.string,
  format: PropTypes.string,
  value: PropTypes.number,
};

DateElement.defaultProps = {
  className: null,
  format: 'MMM Do, YYYY',
  value: null,
};

export default DateElement;
