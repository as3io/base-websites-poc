import React from 'react';
import PropTypes from 'prop-types';

import ContentCard from '../Templates/Content/Card';
import ContentCardBody from '../Templates/Content/Card/Body';
import ContentCardImage from '../Templates/Content/Card/PrimaryImage';

import ElementsRow from '../Templates/Content/Elements/Row';
import ShortNameLink from '../Templates/Content/Elements/ShortNameLink';
import Teaser from '../Templates/Content/Elements/Teaser';
import CompanyLink from '../Templates/Content/Elements/CompanyLink';
import AuthorLinks from '../Templates/Content/Elements/AuthorLinks';
import PrimarySectionLink from '../Templates/Content/Elements/PrimarySectionLink';
import PublishedDate from '../Templates/Content/Elements/PublishedDate';

const displayName = 'Site/CardA';

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

const CardA = ({
  className,
  node,
}) => {
  const item = node || {};
  return item.id ? (
    <ContentCard id={item.id} type={item.type} className={className}>
      <ContentCardImage content={item} />
      <ContentCardBody>
        <ShortNameLink content={item} className="card-title" />
        <CompanyLink company={item.company} className="card-text" />
        <Teaser {...item} className="card-text" />
        <ElementsRow tag="small" className="card-text">
          <PrimarySectionLink {...item} className="mr-2" />
          <AuthorLinks authors={item.authors} className="mr-2" />
          <PublishedDate {...item} />
        </ElementsRow>
      </ContentCardBody>
    </ContentCard>
  ) : null;
};

CardA.displayName = displayName;
CardA.propTypes = propTypes;
CardA.defaultProps = defaultProps;

export default CardA;
