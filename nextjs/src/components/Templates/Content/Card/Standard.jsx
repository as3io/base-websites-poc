import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../../Core/Elements/Content/Link';
import Title from '../../../Core/Elements/Content/Title';
import HTML from '../../../Core/Elements/HTML';
import SectionLinkWithDate from '../../../Core/Elements/Content/SectionLinkWithDate';

const ContentCardStandard = ({ content, publishedDateFormat }) => {
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

  return (
    <div className="card">
      {primaryImage && primaryImage.src && (
        <Link className="embed-responsive embed-responsive-16by9" contentId={id} asPath={canonicalPath}>
          <img className="card-img-top img-fluid embed-responsive-item" src={src} alt={alt} />
        </Link>
      )}
      <div className="card-body">
        <Title
          title={shortName}
          tag="h5"
          className="card-title"
          contentId={id}
          asPath={canonicalPath}
        />
        <HTML tag="p" className="card-text" html={teaser} />
        <SectionLinkWithDate
          className="card-text"
          sectionLinkClassName="mr-2"
          sectionAlias={sectionAlias}
          date={published}
          dateFormat={publishedDateFormat}
        >
          {sectionName}
        </SectionLinkWithDate>
      </div>
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
  publishedDateFormat: PropTypes.string,
};

ContentCardStandard.defaultProps = {
  content: {},
  publishedDateFormat: null,
};

export default ContentCardStandard;
