import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import query from '../gql/blocks/section-query.graphql';

const SectionQuery = ({
  sectionId,
  first,
  after,
  requiresImage,
  children,
}) => {
  const pagination = { first, after };
  const input = {
    sectionId,
    pagination,
    sectionBubbling: true,
    requiresImage,
  };
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
  requiresImage: false,
  children: () => {},
  first: 5,
};

SectionQuery.propTypes = {
  sectionId: PropTypes.number.isRequired,
  after: PropTypes.string,
  children: PropTypes.func,
  first: PropTypes.number,
  requiresImage: PropTypes.bool,
};

export default SectionQuery;
