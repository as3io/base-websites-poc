import React from 'react';
import PropTypes from 'prop-types';

import WebsiteScheduledContent from '../Core/BlockQueries/WebsiteScheduledContent';

import FlowListA from '../Site/Officer/Flows/ListA';

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
  <WebsiteScheduledContent sectionId={sectionId} fields={fields} first={7} requiresImage>
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
      const listItems = items.slice(1);
      return (
        // This entire render would be considered a block component.
        <div className="row">
          <div className="col-lg-8">
            {/* Only render if the hero item exists */}
            {hero.id && (
              // This should be turned into a flow component.
              <ContentCard id={hero.id} type={hero.type} className="shadow">
                <ContentCardImage content={hero} />
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
            <FlowListA nodes={listItems} />
          </div>
        </div>
      );
    }}
  </WebsiteScheduledContent>
);

ContentList.propTypes = {
  sectionId: PropTypes.number.isRequired,
};

export default ContentList;
