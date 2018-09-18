import React from 'react';
import PropTypes from 'prop-types';

import CoreHTMLElement from '../../../Core/Elements/HTML';

const CLASS_NAME = 'content__teaser';

const ContentElementTeaser = ({
  className,
  tag,
  teaser,
}) => (
  <CoreHTMLElement
    tag={tag}
    className={className ? `${CLASS_NAME} ${className}` : CLASS_NAME}
    html={teaser}
  />
);

ContentElementTeaser.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  teaser: PropTypes.string,
};

ContentElementTeaser.defaultProps = {
  className: null,
  teaser: '',
  tag: 'p',
};

export default ContentElementTeaser;
