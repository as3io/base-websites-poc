import React from 'react';
import PropTypes from 'prop-types';

import CoreTitle from '../../../Core/Elements/Content/Title';

const BEM = 'content__title';

const displayName = 'Templates/Content/Elements/Title';

const propTypes = {
  className: PropTypes.string,
  canonicalPath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  shortName: PropTypes.string.isRequired,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: null,
  tag: 'h5',
};

const Title = ({
  className,
  canonicalPath,
  id,
  shortName,
  tag,
}) => (
  <CoreTitle
    title={shortName}
    tag={tag}
    linkClassName="content__link"
    className={className ? `${BEM} ${className}` : BEM}
    contentId={id}
    asPath={canonicalPath}
  />
);

Title.displayName = displayName;
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
