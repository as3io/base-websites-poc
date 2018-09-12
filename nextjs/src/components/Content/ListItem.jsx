import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { CardBody, CardTitle, CardText } from 'reactstrap';

import PublishedDate from './PublishedDate';
import SectionTag from './SectionTag';

const ContentListItem = ({
  id,
  name,
  type,
  slug,
  primarySection,
  published,
}) => (
  <CardBody>
    <CardTitle>
      <Link href={`/content?id=${id}`} as={`/${primarySection.alias}/${type}/${id}/${slug}`}>
        <a>{name}</a>
      </Link>
    </CardTitle>
    <CardText>
      <SectionTag className="mr-2" sectionId={primarySection.id}>
        {primarySection.name}
      </SectionTag>
      <PublishedDate value={published} />
    </CardText>
  </CardBody>
);

ContentListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  published: PropTypes.number,
  primarySection: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    alias: PropTypes.string.isRequired,
  }).isRequired,
};

ContentListItem.defaultProps = {
  published: null,
};

export default ContentListItem;