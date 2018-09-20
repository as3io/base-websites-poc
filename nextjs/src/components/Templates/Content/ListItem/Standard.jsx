import React from 'react';
import PropTypes from 'prop-types';

import ShortNameLink from '../Elements/ShortNameLink';
import Teaser from '../Elements/Teaser';
import CompanyLink from '../Elements/CompanyLink';
import PrimarySectionLink from '../Elements/PrimarySectionLink';
import PublishedDate from '../Elements/PublishedDate';
import AuthorsLink from '../Elements/AuthorsLink';

const ContentListItemStandard = ({
  className,
  content,
  tag: Tag,
}) => {
  const contents = (
    <>
      <span className="d-flex justify-content-between mb-2">
        <PrimarySectionLink {...content} />
        <PublishedDate {...content} tag="small" />
      </span>
      <ShortNameLink {...content} className="mb-1" />
      <AuthorsLink {...content} className="mr-2 mb-2 d-block" tag="small" prefix="By" />
      <CompanyLink {...content} tag="small" />
      <Teaser {...content} />
    </>
  );

  const classNames = className ? `list-group-item ${className}` : 'list-group-item';
  return (
    <Tag className={classNames}>
      {contents}
    </Tag>
  );
};

ContentListItemStandard.propTypes = {
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
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ContentListItemStandard.defaultProps = {
  className: null,
  content: {},
  dateFormat: null,
  tag: 'div',
};

export default ContentListItemStandard;
