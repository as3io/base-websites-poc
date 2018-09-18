import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../../Core/Elements/Content/Link';
import Title from '../../../Core/Elements/Content/Title';
import DateElement from '../../../Core/Elements/Date';
import SectionLink from '../../../Core/Elements/Content/SectionLink';
import HTML from '../../../Core/Elements/HTML';

const ContentCardStandard = ({
  className,
  content,
  dateFormat,
  overlay,
}) => {
  const {
    canonicalPath,
    company,
    id,
    primaryImage,
    primarySection,
    published,
    shortName,
    teaser,
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
      {company && company.id && (
        <p className="card-text">
          <Link contentId={company.id} asPath={company.canonicalPath}>
            {company.name}
          </Link>
        </p>
      )}
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

  const classNames = className ? `card ${className}` : 'card';
  return (
    <div className={classNames}>
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
};

ContentCardStandard.defaultProps = {
  className: null,
  content: {},
  dateFormat: null,
  overlay: false,
};

export default ContentCardStandard;
