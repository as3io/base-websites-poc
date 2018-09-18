import React from 'react';
import PropTypes from 'prop-types';

import CoreTitleElement from '../../../Core/Elements/Content/Title';

const CLASS_NAME = 'content__title';

const ContentElementTitle = ({
  className,
  canonicalPath,
  id,
  shortName,
  tag,
}) => (
  <CoreTitleElement
    title={shortName}
    tag={tag}
    linkClassName="content__link"
    className={className ? `${CLASS_NAME} ${className}` : CLASS_NAME}
    contentId={id}
    asPath={canonicalPath}
  />
);

ContentElementTitle.propTypes = {
  className: PropTypes.string,
  canonicalPath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  shortName: PropTypes.string.isRequired,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ContentElementTitle.defaultProps = {
  className: null,
  tag: 'h5',
};

export default ContentElementTitle;
