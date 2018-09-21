import React from 'react';
import PropTypes from 'prop-types';

import ContentListGroupItem from '../../../Templates/Content/ListGroupItem';

import ElementsRow from '../../../Templates/Content/Elements/Row';
import ShortNameLink from '../../../Templates/Content/Elements/ShortNameLink';
import CompanyLink from '../../../Templates/Content/Elements/CompanyLink';
import PrimarySectionLink from '../../../Templates/Content/Elements/PrimarySectionLink';
import PublishedDate from '../../../Templates/Content/Elements/PublishedDate';
import ContentType from '../../../Templates/Content/Elements/ContentType';

const displayName = 'Site/Content/ListGroupItem/StyleA';

const propTypes = {
  node: PropTypes.shape({
    id: PropTypes.number,
  }),
};

const defaultProps = {
  node: {},
};

const ListGroupItemStyleA = ({ node }) => {
  const content = node || {};
  return content.id ? (
    <ContentListGroupItem id={content.id} key={content.id} type={content.type}>
      <ContentType content={content} tag="small" className="d-block mb-1" />
      <ShortNameLink content={content} className="mb-1" />
      <CompanyLink company={content.company} tag="small" className="d-block" prefix="From" />
      <ElementsRow tag="small">
        <PrimarySectionLink {...content} className="mr-2" />
        <PublishedDate {...content} />
      </ElementsRow>
    </ContentListGroupItem>
  ) : null;
};

ListGroupItemStyleA.displayName = displayName;
ListGroupItemStyleA.propTypes = propTypes;
ListGroupItemStyleA.defaultProps = defaultProps;

export default ListGroupItemStyleA;
