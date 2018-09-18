import React from 'react';
import PropTypes from 'prop-types';

import createMarkup from '../../../lib/create-markup';

const HTMLElement = ({
  className,
  collapsable,
  html,
  tag: Tag,
}) => {
  if (!html && collapsable) return null;
  return <Tag className={className} dangerouslySetInnerHTML={createMarkup(html)} />;
};

HTMLElement.propTypes = {
  className: PropTypes.string,
  collapsable: PropTypes.bool,
  html: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

HTMLElement.defaultProps = {
  className: null,
  collapsable: true,
  html: '',
  tag: 'div',
};

export default HTMLElement;
