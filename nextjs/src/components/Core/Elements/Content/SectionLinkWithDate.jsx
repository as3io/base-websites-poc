import React from 'react';
import PropTypes from 'prop-types';

import SectionLink from './SectionLink';
import DateElement from '../Date';

const SectionLinkWithDate = ({
  children,
  className,
  date,
  dateClassName,
  sectionAlias,
  sectionLinkClassName,
  tag: Tag,
}) => (
  <Tag className={className}>
    <SectionLink className={sectionLinkClassName} sectionAlias={sectionAlias}>
      {children}
    </SectionLink>
    <DateElement class={dateClassName} value={date} />
  </Tag>
);

SectionLinkWithDate.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  date: PropTypes.number,
  dateClassName: PropTypes.string,
  sectionAlias: PropTypes.string,
  sectionLinkClassName: PropTypes.string,
};

SectionLinkWithDate.defaultProps = {
  children: null,
  className: null,
  date: null,
  dateClassName: null,
  sectionAlias: null,
  sectionLinkClassName: null,
  tag: 'small',
};

export default SectionLinkWithDate;
