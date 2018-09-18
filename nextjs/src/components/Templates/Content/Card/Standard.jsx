import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../../Core/Elements/Content/Link';
import Title from '../../../Core/Elements/Content/Title';
import DateElement from '../../../Core/Elements/Date';
import SectionLink from '../../../Core/Elements/Content/SectionLink';
import HTML from '../../../Core/Elements/HTML';

const ContentCardStandard = ({ content, dateFormat, overlay }) => {
  const {
    id,
    canonicalPath,
    shortName,
    primaryImage,
    teaser,
    published,
    primarySection,
  } = content;
  const { src, alt } = primaryImage || {};
  const { name: sectionName, alias: sectionAlias } = primarySection || {};

  const contents = (
    <>
      <Title
        title={shortName}
        tag="h5"
        className="card-title"
        contentId={id}
        asPath={canonicalPath}
      />
      <HTML tag="p" className="card-text" html={teaser} />
      <small className="card-text">
        <SectionLink className="mr-2" sectionAlias={sectionAlias}>
          {sectionName}
        </SectionLink>
        <DateElement value={published} dateFormat={dateFormat} />
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

  return (
    <div className="card">
      {primaryImage && primaryImage.src && (
        <Link className="embed-responsive embed-responsive-16by9" contentId={id} asPath={canonicalPath}>
          <img className="card-img-top img-fluid embed-responsive-item" src={src} alt={alt} />
        </Link>
      )}
      {elements}
    </div>
  );
};

ContentCardStandard.propTypes = {
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
};

ContentCardStandard.defaultProps = {
  content: {},
  dateFormat: null,
  overlay: false,
};

export default ContentCardStandard;
