import React from 'react';
import PropTypes from 'prop-types';
import { CardBody, CardTitle, CardText } from 'reactstrap';

import ContentLink from './Link';
import PublishedDate from './PublishedDate';
import SectionTag from './SectionTag';

const ContentListItem = ({
  id,
  name,
  shortName,
  canonicalPath,
  primarySection,
  published,
}) => (
  <CardBody>
    <CardTitle>
      <ContentLink id={id} canonicalPath={canonicalPath}>
        {shortName || name}
      </ContentLink>
    </CardTitle>
    <CardText>
      <SectionTag className="mr-2" alias={primarySection.alias}>
        {primarySection.name}
      </SectionTag>
      <PublishedDate value={published} />
    </CardText>
  </CardBody>
);

ContentListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  shortName: PropTypes.string,
  canonicalPath: PropTypes.string.isRequired,
  published: PropTypes.number,
  primarySection: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    alias: PropTypes.string.isRequired,
  }).isRequired,
};

ContentListItem.defaultProps = {
  published: null,
  shortName: '',
};

export default ContentListItem;
