import React from 'react';
import PropTypes from 'prop-types';

import ShortNameLink from '../Elements/ShortNameLink';
import CompanyLink from '../Elements/CompanyLink';
import PrimarySectionLink from '../Elements/PrimarySectionLink';
import PublishedDate from '../Elements/PublishedDate';

const ContentListItemStandard = ({
  className,
  content,
  tag: Tag,
}) => {
  const contents = (
    <>
      <ShortNameLink content={content} className="mb-1" />
      <CompanyLink company={content.company} tag="small" className="d-block" prefix="From" />
      <small>
        <PrimarySectionLink {...content} className="mr-2" />
        <PublishedDate {...content} />
      </small>
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
