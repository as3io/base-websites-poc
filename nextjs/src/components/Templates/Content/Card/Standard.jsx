import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../../Core/Elements/Content/Link';
import ShortNameLink from '../Elements/ShortNameLink';
import Teaser from '../Elements/Teaser';
import CompanyLink from '../Elements/CompanyLink';
import PrimarySectionLink from '../Elements/PrimarySectionLink';
import PublishedDate from '../Elements/PublishedDate';
import AuthorsLink from '../Elements/AuthorsLink';

const ContentCardStandard = ({
  className,
  content,
  overlay,
  tag: Tag,
}) => {
  const {
    canonicalPath,
    id,
    primaryImage,
  } = content;
  const { src, alt } = primaryImage || {};

  const contents = (
    <>
      <ShortNameLink {...content} className="card-title" />
      <CompanyLink {...content} className="card-text" />
      <Teaser {...content} className="card-text" />
      <small className="card-text">
        <PrimarySectionLink {...content} className="mr-2" />
        <AuthorsLink {...content} className="mr-2" />
        <PublishedDate {...content} />
      </small>
    </>
  );

  const elements = (
    <div className={overlay ? 'card-img-overlay d-flex flex-column' : 'card-body'}>
      {overlay ? (
        <div className="mt-auto">
          {contents}
        </div>
      ) : contents}
    </div>
  );

  const classNames = className ? `card ${className}` : 'card';
  return (
    <Tag className={classNames}>
      {primaryImage && primaryImage.src && (
        <Link className="embed-responsive embed-responsive-16by9" contentId={id} asPath={canonicalPath}>
          <img className="card-img-top img-fluid embed-responsive-item" src={src} alt={alt} />
        </Link>
      )}
      {elements}
    </Tag>
  );
};

ContentCardStandard.propTypes = {
  className: PropTypes.string,
  content: PropTypes.shape({
    id: PropTypes.number.isRequired,
    canonicalPath: PropTypes.string.isRequired,
    primaryImage: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  }),
  dateFormat: PropTypes.string,
  overlay: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ContentCardStandard.defaultProps = {
  className: null,
  content: {},
  dateFormat: null,
  overlay: false,
  tag: 'div',
};

export default ContentCardStandard;
