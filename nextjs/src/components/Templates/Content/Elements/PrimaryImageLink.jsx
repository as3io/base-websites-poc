import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from '../Link';

const displayName = 'Templates/Content/Elements/PrimaryImageLink';

const propTypes = {
  className: PropTypes.string,
  content: PropTypes.shape({
    id: PropTypes.number,
    canonicalPath: PropTypes.string,
    primaryImage: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  }),
  linkClassName: PropTypes.string,
};

const defaultProps = {
  className: null,
  content: {},
  linkClassName: null,
};

const PrimaryImageLink = ({
  className,
  content,
  linkClassName,
}) => {
  const { id, canonicalPath, primaryImage } = content || {};
  const { src, alt } = primaryImage || {};
  return src && id && canonicalPath ? (
    <Link
      id={id}
      canonicalPath={canonicalPath}
      className={linkClassName}
    >
      <img
        className={classNames('content__primary-image', className)}
        src={src}
        alt={alt}
      />
    </Link>
  ) : null;
};

PrimaryImageLink.displayName = displayName;
PrimaryImageLink.propTypes = propTypes;
PrimaryImageLink.defaultProps = defaultProps;

export default PrimaryImageLink;
