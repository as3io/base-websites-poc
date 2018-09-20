import React from 'react';
import PropTypes from 'prop-types';

import ContentListGroup from '../../../Templates/Content/ListGroup';
import ContentListGroupItem from '../../../Templates/Content/ListGroupItem';

import ElementsRow from '../../../Templates/Content/Elements/Row';
import ShortNameLink from '../../../Templates/Content/Elements/ShortNameLink';
import CompanyLink from '../../../Templates/Content/Elements/CompanyLink';
import PrimarySectionLink from '../../../Templates/Content/Elements/PrimarySectionLink';
import PublishedDate from '../../../Templates/Content/Elements/PublishedDate';

const displayName = 'Site/Officer/Flows/ListA';

const propTypes = {
  className: PropTypes.string,
  nodes: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
  className: null,
  nodes: [],
};

const ListA = ({
  className,
  nodes,
}) => {
  const items = (Array.isArray(nodes) ? nodes : []).filter(content => content.id);
  return items.length ? (
    <ContentListGroup className={className}>
      {items.map(content => (
        <ContentListGroupItem id={content.id} key={content.id} type={content.type}>
          <ShortNameLink content={content} className="mb-1" />
          <CompanyLink company={content.company} tag="small" className="d-block" prefix="From" />
          <ElementsRow tag="small">
            <PrimarySectionLink {...content} className="mr-2" />
            <PublishedDate {...content} />
          </ElementsRow>
        </ContentListGroupItem>
      ))}
    </ContentListGroup>
  ) : null;
};

ListA.displayName = displayName;
ListA.propTypes = propTypes;
ListA.defaultProps = defaultProps;

export default ListA;
