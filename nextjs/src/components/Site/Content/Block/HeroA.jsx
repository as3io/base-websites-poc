import React from 'react';
import PropTypes from 'prop-types';

import WebsiteScheduledContent from '../../../Core/BlockQueries/WebsiteScheduledContent';
import CardStyleA from '../Card/StyleA';
import ListGroupStyleA from '../ListGroup/StyleA';

const displayName = 'Site/Content/Block/HeroA';

const propTypes = {
  // @todo These should be placed here by a HOC.
  query: PropTypes.shape({
    after: PropTypes.string,
    children: PropTypes.func,
    excludeContentIds: PropTypes.arrayOf(PropTypes.string),
    excludeContentTypes: PropTypes.arrayOf(PropTypes.string),
    first: PropTypes.number,
    includeContentTypes: PropTypes.arrayOf(PropTypes.string),
    requiresImage: PropTypes.bool,
    sectionBubbling: PropTypes.bool,
    sectionId: PropTypes.number.isRequired,
  }),
};

const defaultProps = {
  query: {},
};

/**
 * @todo Need to find a more elegant way of handling this.
 */
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

const BlockHeroA = ({ query }) => {
  const props = { ...query, fields };
  return (
    <WebsiteScheduledContent {...props}>
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
        const listItems = items.slice(1) || [];
        return (
          <div className="row">
            <div className="col-lg-8">
              <CardStyleA node={hero} className="mb-3" />
            </div>
            <div className="col-lg-4">
              <ListGroupStyleA nodes={listItems} />
            </div>
          </div>
        );
      }}
    </WebsiteScheduledContent>
  );
};

BlockHeroA.displayName = displayName;
BlockHeroA.propTypes = propTypes;
BlockHeroA.defaultProps = defaultProps;

export default BlockHeroA;
