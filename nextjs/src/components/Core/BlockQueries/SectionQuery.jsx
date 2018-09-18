import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

/**
 *
 * @todo Determine if a regular vs. simply query block even makes sense.
 * @todo Eventually these may need to be merged and/or GraphQL should provide
 *       a "special" endpoint for handling these queries. This will especially
 *       be true once the concept of "flows" are implemented.
 */
const SectionQuery = ({
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
        {({ loading, error, data }) => (children({ loading, error, data }))}
      </Query>
    </>
  );
};

SectionQuery.defaultProps = {
  after: null,
  children: () => {},
  excludeContentTypes: [],
  first: 5,
  includeContentTypes: [],
  requiresImage: false,
  sectionBubbling: true,
};

SectionQuery.propTypes = {
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

export default SectionQuery;
