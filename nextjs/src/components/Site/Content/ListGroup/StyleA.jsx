import React from 'react';
import PropTypes from 'prop-types';

import ContentListGroup from '../../../Templates/Content/ListGroup';
import ListGroupItemA from '../ListGroupItem/StyleA';

const displayName = 'Site/Content/ListGroup/StyleA';

const propTypes = {
  className: PropTypes.string,
  flush: PropTypes.bool,
  nodes: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
  className: null,
  flush: false,
  nodes: [],
};

const ListGroupStyleA = ({
  className,
  flush,
  nodes,
}) => {
  const items = (Array.isArray(nodes) ? nodes : []).filter(content => content.id);
  return items.length ? (
    <ContentListGroup className={className} flush={flush}>
      {items.map(content => (
        <ListGroupItemA key={content.id} node={content} />
      ))}
    </ContentListGroup>
  ) : null;
};

ListGroupStyleA.displayName = displayName;
ListGroupStyleA.propTypes = propTypes;
ListGroupStyleA.defaultProps = defaultProps;

export default ListGroupStyleA;
