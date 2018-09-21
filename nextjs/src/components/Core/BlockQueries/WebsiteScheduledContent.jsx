import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

/**
 *
 */
const WebsiteScheduledContent = ({
  after,
  children,
  excludeContentIds,
  excludeContentTypes,
  first,
  fields,
  includeContentTypes,
  requiresImage,
  sectionBubbling,
  sectionId,
}) => {
  const pagination = { first, after };
  const input = {
    pagination,
    excludeContentIds,
    excludeContentTypes,
    includeContentTypes,
    requiresImage,
    sectionBubbling,
    sectionId,
  };

  const query = gql`
    query WebsiteScheduledContent($input: WebsiteScheduledPlatformContentQuery!) {
      websiteScheduledPlatformContent(input: $input) {
        edges {
          node {
            ${fields}
          }
        }
      }
    }
  `;
  return (
    <>
      <Query query={query} variables={{ input }}>
        {({ loading, error, data }) => {
          let items = [];
          if (data && data.websiteScheduledPlatformContent) {
            items = data.websiteScheduledPlatformContent.edges
              .map(edge => (edge && edge.node ? edge.node : null))
              .filter(c => c);
          }
          return children({ loading, error, items });
        }}
      </Query>
    </>
  );
};

WebsiteScheduledContent.defaultProps = {
  after: null,
  children: () => {},
  excludeContentIds: [],
  excludeContentTypes: [],
  first: 5,
  includeContentTypes: [],
  requiresImage: false,
  sectionBubbling: true,
};

WebsiteScheduledContent.propTypes = {
  after: PropTypes.string,
  children: PropTypes.func,
  excludeContentIds: PropTypes.arrayOf(PropTypes.string),
  excludeContentTypes: PropTypes.arrayOf(PropTypes.string),
  fields: PropTypes.string.isRequired,
  first: PropTypes.number,
  includeContentTypes: PropTypes.arrayOf(PropTypes.string),
  requiresImage: PropTypes.bool,
  sectionBubbling: PropTypes.bool,
  sectionId: PropTypes.number.isRequired,
};

export default WebsiteScheduledContent;
