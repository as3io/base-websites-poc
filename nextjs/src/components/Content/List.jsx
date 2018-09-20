import React from 'react';
import PropTypes from 'prop-types';

import ContentListGroup from '../Templates/Content/ListGroup';
import ContentListGroupItem from '../Templates/Content/ListGroupItem';

import ShortNameLink from '../Templates/Content/Elements/ShortNameLink';
import CompanyLink from '../Templates/Content/Elements/CompanyLink';
import PrimarySectionLink from '../Templates/Content/Elements/PrimarySectionLink';
import PublishedDate from '../Templates/Content/Elements/PublishedDate';

import SectionQuerySimple from '../Core/BlockQueries/SectionQuerySimple';
import ContentCardStandard from '../Templates/Content/Card/Standard';

const fields = `
  id
  name
  shortName
  teaser
  type
  canonicalPath
  published
  primaryImage {
    id
    src(input: { host: "cdn.officer.com" })
    alt
  }
  primarySection {
    id
    name
    alias
  }
  ... on PlatformContentProduct {
    company {
      id
      name
      canonicalPath
    }
  }
  ... on PlatformContentArticle {
    authors(input: { sort: { field: lastName }, pagination: { first: 3 } }) {
      edges {
        node {
          id
          fullName
          canonicalPath
        }
      }
    }
  }
`;

const ContentList = ({ sectionId }) => (
  <SectionQuerySimple sectionId={sectionId} fields={fields} first={7} requiresImage includeContentTypes={['Article', 'Product']}>
    {({ loading, error, items }) => {
      if (loading) return <span>Loading...</span>;
      if (error) {
        return (
          <span>
            Error
            {' '}
            {error.message}
          </span>
        );
      }
      const hero = items[0];
      if (!hero) return null;
      return (
        <div className="row">
          <div className="col-lg-8">
            <ContentCardStandard
              className="shadow"
              content={hero}
            />
          </div>
          <div className="col-lg-4">
            <ContentListGroup className="shadow">
              {items.map((content, index) => {
                if (index === 0) return null;
                return (
                  <ContentListGroupItem key={content.id}>
                    <ShortNameLink content={content} className="mb-1" />
                    <CompanyLink company={content.company} tag="small" className="d-block" prefix="From" />
                    <small>
                      <PrimarySectionLink {...content} className="mr-2" />
                      <PublishedDate {...content} />
                    </small>
                  </ContentListGroupItem>
                );
              })}
            </ContentListGroup>
          </div>
        </div>
      );
    }}
  </SectionQuerySimple>
);

ContentList.propTypes = {
  sectionId: PropTypes.number.isRequired,
};

export default ContentList;
