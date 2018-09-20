import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CoreDate from '../../../Core/Elements/Date';

const displayName = 'Templates/Content/Elements/PublishedDate';

const propTypes = {
  className: PropTypes.string,
  format: PropTypes.string,
  published: PropTypes.number,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: null,
  format: undefined,
  published: null,
  tag: 'span',
};

const PublishedDate = ({
  className,
  format,
  tag,
  published,
}) => (
  <CoreDate
    tag={tag}
    className={classNames('content__published-date', className)}
    value={published}
    format={format}
  />
);

PublishedDate.displayName = displayName;
PublishedDate.propTypes = propTypes;
PublishedDate.defaultProps = defaultProps;

export default PublishedDate;
