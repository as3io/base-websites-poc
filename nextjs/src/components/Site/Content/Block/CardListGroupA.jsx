import React from 'react';
import PropTypes from 'prop-types';

import WebsiteScheduledContent from '../../../Core/BlockQueries/WebsiteScheduledContent';
import CardListGroupStyleA from '../CardListGroup/StyleA';

const displayName = 'Site/Content/Block/CardListGroupA';

const propTypes = {
  header: PropTypes.string,
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
  header: '',
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

const BlockCardListGroupA = ({ query, header }) => {
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
        return <CardListGroupStyleA header={header} nodes={items} />;
      }}
    </WebsiteScheduledContent>
  );
};

BlockCardListGroupA.displayName = displayName;
BlockCardListGroupA.propTypes = propTypes;
BlockCardListGroupA.defaultProps = defaultProps;

export default BlockCardListGroupA;
