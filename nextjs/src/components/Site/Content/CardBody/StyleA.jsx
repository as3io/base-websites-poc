import React from 'react';
import PropTypes from 'prop-types';

import ContentCardBody from '../../../Templates/Content/Card/Body';
import ContentCardImage from '../../../Templates/Content/Card/PrimaryImage';

import ElementsRow from '../../../Templates/Content/Elements/Row';
import ShortNameLink from '../../../Templates/Content/Elements/ShortNameLink';
import Teaser from '../../../Templates/Content/Elements/Teaser';
import CompanyLink from '../../../Templates/Content/Elements/CompanyLink';
import PrimarySectionLink from '../../../Templates/Content/Elements/PrimarySectionLink';
import PublishedDate from '../../../Templates/Content/Elements/PublishedDate';

const displayName = 'Site/Content/CardBody/StyleA';

const propTypes = {
  node: PropTypes.shape({
    id: PropTypes.number,
  }),
};

const defaultProps = {
  node: {},
};

const CardBodyStyleA = ({ node }) => {
  const content = node || {};
  return content.id ? (
    <>
      <ContentCardImage content={content} />
      <ContentCardBody>
        <ShortNameLink content={content} className="card-title" />
        <CompanyLink company={content.company} className="card-text" />
        <Teaser {...content} className="card-text" />
        <ElementsRow tag="small" className="card-text">
          <PrimarySectionLink {...content} className="mr-2" />
          <PublishedDate {...content} />
        </ElementsRow>
      </ContentCardBody>
    </>
  ) : null;
};

CardBodyStyleA.displayName = displayName;
CardBodyStyleA.propTypes = propTypes;
CardBodyStyleA.defaultProps = defaultProps;

export default CardBodyStyleA;