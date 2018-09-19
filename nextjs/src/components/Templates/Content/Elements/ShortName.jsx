import React from 'react';
import PropTypes from 'prop-types';

import CoreTitle from '../../../Core/Elements/Content/Title';

const BEM = 'content__short-name';

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

const ShortName = ({
  className,
  canonicalPath,
  id,
  shortName,
  tag,
}) => (shortName ? (
  <CoreTitle
    title={shortName}
    tag={tag}
    linkClassName="content__link"
    className={className ? `${BEM} ${className}` : BEM}
    contentId={id}
    asPath={canonicalPath}
  />
) : null);

ShortName.displayName = displayName;
ShortName.propTypes = propTypes;
ShortName.defaultProps = defaultProps;

export default ShortName;
