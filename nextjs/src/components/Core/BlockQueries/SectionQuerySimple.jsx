import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const SectionQuerySimple = ({
  after,
  children,
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
    excludeContentTypes,
    includeContentTypes,
    requiresImage,
    sectionBubbling,
    sectionId,
  };

  const query = gql`
    query SectionQueryBlock($input: WebsiteScheduledPlatformContentQuery!) {
      websiteScheduledPlatformContent(input: $input) {
        edges {
          node {
            id
            content {
              ${fields}
            }
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
              .map(edge => (edge && edge.node && edge.node.content ? edge.node.content : null))
              .filter(c => c);
          }
          return children({ loading, error, items });
        }}
      </Query>
    </>
  );
};

SectionQuerySimple.defaultProps = {
  after: null,
  children: () => {},
  excludeContentTypes: [],
  first: 5,
  includeContentTypes: [],
  requiresImage: false,
  sectionBubbling: true,
};

SectionQuerySimple.propTypes = {
  after: PropTypes.string,
  children: PropTypes.func,
  excludeContentTypes: PropTypes.arrayOf(PropTypes.string),
  fields: PropTypes.string.isRequired,
  first: PropTypes.number,
  includeContentTypes: PropTypes.arrayOf(PropTypes.string),
  requiresImage: PropTypes.bool,
  sectionBubbling: PropTypes.bool,
  sectionId: PropTypes.number.isRequired,
};

export default SectionQuerySimple;
