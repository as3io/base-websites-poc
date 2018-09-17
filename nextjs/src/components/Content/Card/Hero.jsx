import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
} from 'reactstrap';

import DateElement from '../../Elements/Date';
import ContentCardTopImage from './TopImage';
import ContentSectionLink from '../../Elements/Content/SectionLink';
import ContentTitle from '../../Elements/Content/Title';
import HTMLElement from '../../Elements/HTML';

const ContentCardHero = ({
  id,
  canonicalPath,
  primaryImage,
  primarySection,
  published,
  shortName,
  teaser,
}) => (
  <Card>
    <ContentCardTopImage
      contentId={id}
      canonicalPath={canonicalPath}
      src={primaryImage.src}
      alt={primaryImage.alt}
    />
    <CardBody>
      <ContentTitle
        title={shortName}
        tag="h5"
        className="card-title"
        contentId={id}
        asPath={canonicalPath}
      />
      <HTMLElement tag="p" className="card-text" html={teaser} />
      <small className="card-text">
        <ContentSectionLink className="mr-2" sectionAlias={primarySection.alias}>
          {primarySection.name}
        </ContentSectionLink>
        <DateElement value={published} />
      </small>
    </CardBody>
  </Card>
);

ContentCardHero.propTypes = {
  id: PropTypes.number.isRequired,
  canonicalPath: PropTypes.string.isRequired,
  shortName: PropTypes.string,
  teaser: PropTypes.string,
  primaryImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  published: PropTypes.number,
  primarySection: PropTypes.shape({
    alias: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

ContentCardHero.defaultProps = {
  shortName: '',
  teaser: '',
  published: null,
  primaryImage: {},
};

export default ContentCardHero;
