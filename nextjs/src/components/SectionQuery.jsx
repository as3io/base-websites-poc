import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import query from '../gql/blocks/section-query.graphql';

const SectionQuery = ({
  after,
  children,
  excludeContentTypes,
  first,
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
  // @todo The CDN host should be determined by GraphQL.
  const imageInput = { host: 'cdn.officer.com' };
  return (
    <>
      <Query query={query} variables={{ input, imageInput }}>
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
  first: PropTypes.number,
  includeContentTypes: PropTypes.arrayOf(PropTypes.string),
  requiresImage: PropTypes.bool,
  sectionBubbling: PropTypes.bool,
  sectionId: PropTypes.number.isRequired,
};

export default SectionQuery;
