import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import DefaultLayout from '../layouts/Default';

import sectionPage from '../gql/queries/section-page.graphql';

const SectionPage = ({ id }) => {
  const input = { id };
  return (
    <DefaultLayout>
      <Query query={sectionPage} variables={{ input }}>
        {({ loading, error, data }) => {
          if (loading) return <span>Loading...</span>;
          if (error) return <span>{error.message}</span>;
          const { websiteSection } = data;
          return (
            <h1>{websiteSection.name}</h1>
          );
        }}
      </Query>
    </DefaultLayout>
  );
};

SectionPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

SectionPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SectionPage;
