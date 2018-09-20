import React from 'react';
import PropTypes from 'prop-types';

import WebsiteScheduledContent from '../Core/BlockQueries/WebsiteScheduledContent';

import ContentCardA from '../Site/Officer/Content/CardA';
import ContentListA from '../Site/Officer/Content/ListA';

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
            <ContentCardA node={hero} />
          </div>
          <div className="col-lg-4">
            <ContentListA nodes={listItems} />
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
