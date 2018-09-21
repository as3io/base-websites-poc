import React from 'react';
import PropTypes from 'prop-types';

import ContentCard from '../../../Templates/Content/Card';
import CardBodyStyleA from '../CardBody/StyleA';
import ListGroupStyleA from '../ListGroup/StyleA';

const displayName = 'Site/Content/CardListGroup/StyleA';

const propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  nodes: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
  className: null,
  header: '',
  nodes: [],
};

const CardListGroupStyleA = ({
  className,
  header,
  nodes,
}) => {
  const items = (Array.isArray(nodes) ? nodes : []).filter(content => content.id);
  if (!items.length) return null;

  const content = items[0] || {};
  const listContent = items.slice(1) || [];

  return (
    <ContentCard id={content.id} type={content.type} className={className}>
      {header && (
        <div className="card-header">{header}</div>
      )}
      <CardBodyStyleA node={content} />
      <ListGroupStyleA nodes={listContent} flush />
    </ContentCard>
  );
};

CardListGroupStyleA.displayName = displayName;
CardListGroupStyleA.propTypes = propTypes;
CardListGroupStyleA.defaultProps = defaultProps;

export default CardListGroupStyleA;
