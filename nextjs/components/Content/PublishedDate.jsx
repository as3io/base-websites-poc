import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const formatValue = (value, format) => {
  if (!value) return '';
  const date = moment(value);
  if (!date.isValid()) return '';
  return moment(value).format(format);
};

const ContentPublishedDate = ({ value, format }) => (
  <span>{formatValue(value, format)}</span>
);

ContentPublishedDate.propTypes = {
  format: PropTypes.string,
  value: PropTypes.number,
};

ContentPublishedDate.defaultProps = {
  value: null,
  format: 'MMM Do, YYYY',
};

export default ContentPublishedDate;
