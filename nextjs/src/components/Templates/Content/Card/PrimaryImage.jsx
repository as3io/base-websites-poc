import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PrimaryImageLink from '../Elements/PrimaryImageLink';

const displayName = 'Templates/Content/Card/PrimaryImage';

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
  withBody: PropTypes.bool,
};

const defaultProps = {
  className: null,
  content: {},
  linkClassName: null,
  withBody: false,
};

const PrimaryImage = ({
  className,
  content,
  linkClassName,
  withBody,
}) => (
  <PrimaryImageLink
    content={content}
    className={classNames(withBody ? 'card-img' : 'card-img-top', 'img-fluid', 'embed-responsive-item', className)}
    linkClassName={classNames('embed-responsive', 'embed-responsive-16by9', linkClassName)}
  />
);

PrimaryImage.displayName = displayName;
PrimaryImage.propTypes = propTypes;
PrimaryImage.defaultProps = defaultProps;

export default PrimaryImage;
