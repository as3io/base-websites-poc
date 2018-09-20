import React from 'react';
import PropTypes from 'prop-types';

import ContentListGroup from '../Templates/Content/ListGroup';
import ContentListGroupItem from '../Templates/Content/ListGroupItem';
import ContentCard from '../Templates/Content/Card';
import ContentCardBody from '../Templates/Content/Card/Body';

import ElementsRow from '../Templates/Content/Elements/Row';
import ShortNameLink from '../Templates/Content/Elements/ShortNameLink';
import Teaser from '../Templates/Content/Elements/Teaser';
import CompanyLink from '../Templates/Content/Elements/CompanyLink';
import AuthorLinks from '../Templates/Content/Elements/AuthorLinks';
import PrimarySectionLink from '../Templates/Content/Elements/PrimarySectionLink';
import PublishedDate from '../Templates/Content/Elements/PublishedDate';

import SectionQuerySimple from '../Core/BlockQueries/SectionQuerySimple';

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
      const hero = items[0] || {};
      return (
        // This entire render would be considered a block component.
        <div className="row">
          <div className="col-lg-8">
            {/* Only render if the hero item exists */}
            {hero.id && (
              // This should be turned into a flow component.
              <ContentCard type={hero.type} className="shadow">
                <ContentCardBody>
                  <ShortNameLink content={hero} className="card-title" />
                  <CompanyLink company={hero.company} className="card-text" />
                  <Teaser {...hero} className="card-text" />
                  <ElementsRow tag="small" className="card-text">
                    <PrimarySectionLink {...hero} className="mr-2" />
                    <AuthorLinks authors={hero.authors} className="mr-2" />
                    <PublishedDate {...hero} />
                  </ElementsRow>
                </ContentCardBody>
              </ContentCard>
            )}
          </div>
          <div className="col-lg-4">
            {/* Only render if additional items exist */}
            {items.length - 1 && (
              // This should be turned into a flow component.
              <ContentListGroup className="shadow">
                {items.map((content, index) => {
                  if (index === 0) return null;
                  return (
                    <ContentListGroupItem key={content.id} type={content.type}>
                      <ShortNameLink content={content} className="mb-1" />
                      <CompanyLink company={content.company} tag="small" className="d-block" prefix="From" />
                      <ElementsRow tag="small">
                        <PrimarySectionLink {...content} className="mr-2" />
                        <PublishedDate {...content} />
                      </ElementsRow>
                    </ContentListGroupItem>
                  );
                })}
              </ContentListGroup>
            )}
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
