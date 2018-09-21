import React from 'react';
import PropTypes from 'prop-types';

import ContentCard from '../../../Templates/Content/Card';
import CardBodyStyleA from '../CardBody/StyleA';

const displayName = 'Site/Content/Card/StyleA';

const propTypes = {
  className: PropTypes.string,
  node: PropTypes.shape({
    id: PropTypes.number,
  }),
};

const defaultProps = {
  className: null,
  node: {},
};

const CardStyleA = ({
  className,
  node,
}) => {
  const content = node || {};
  return content.id ? (
    <ContentCard id={content.id} type={content.type} className={className}>
      <CardBodyStyleA node={content} />
    </ContentCard>
  ) : null;
};

CardStyleA.displayName = displayName;
CardStyleA.propTypes = propTypes;
CardStyleA.defaultProps = defaultProps;

export default CardStyleA;
