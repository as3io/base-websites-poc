import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import query from '../gql/blocks/section-query.graphql';

const SectionQuery = ({
  sectionId,
  first,
  after,
  children,
}) => {
  const pagination = { first, after };
  const input = { sectionId, pagination };
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
  first: 5,
};

SectionQuery.propTypes = {
  sectionId: PropTypes.number.isRequired,
  after: PropTypes.string,
  children: PropTypes.func,
  first: PropTypes.number,
};

export default SectionQuery;
