import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../../Core/Elements/Content/Link';
import Title from '../Elements/Title';
import Teaser from '../Elements/Teaser';
import DateElement from '../../../Core/Elements/Date';
import SectionLink from '../../../Core/Elements/Content/SectionLink';

const ContentCardStandard = ({
  className,
  content,
  dateFormat,
  overlay,
  tag: Tag,
}) => {
  const {
    canonicalPath,
    company,
    id,
    primaryImage,
    primarySection,
    published,
  } = content;
  const { src, alt } = primaryImage || {};
  const { name: sectionName, alias: sectionAlias } = primarySection || {};

  const contents = (
    <>
      <Title {...content} className="card-title" />
      {company && company.id && (
        <p className="card-text">
          <Link contentId={company.id} asPath={company.canonicalPath}>
            {company.name}
          </Link>
        </p>
      )}
      <Teaser {...content} className="card-text" />
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
