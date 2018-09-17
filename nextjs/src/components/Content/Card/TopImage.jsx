import React from 'react';
import PropTypes from 'prop-types';

import ContentLink from '../Link';

const ContentCardTopImage = ({
  contentId,
  canonicalPath,
  src,
  alt,
}) => (
  <ContentLink className="embed-responsive embed-responsive-16by9" id={contentId} canonicalPath={canonicalPath}>
    <img className="card-img-top img-fluid embed-responsive-item" src={src} alt={alt} />
  </ContentLink>
);

ContentCardTopImage.propTypes = {
  contentId: PropTypes.number.isRequired,
  canonicalPath: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ContentCardTopImage;
