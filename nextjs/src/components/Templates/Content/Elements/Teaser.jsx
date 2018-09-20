import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CoreHTML from '../../../Core/Elements/HTML';

const displayName = 'Templates/Content/Elements/Teaser';

const propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  teaser: PropTypes.string,
};

const defaultProps = {
  className: null,
  teaser: '',
  tag: 'p',
};

const Teaser = ({
  className,
  tag,
  teaser,
}) => (
  <CoreHTML
    tag={tag}
    className={classNames('content__teaser', className)}
    html={teaser}
  />
);

Teaser.displayName = displayName;
Teaser.propTypes = propTypes;
Teaser.defaultProps = defaultProps;

export default Teaser;
