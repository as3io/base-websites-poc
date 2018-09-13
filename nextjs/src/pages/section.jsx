import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import DefaultLayout from '../layouts/Default';
import ContentList from '../components/Content/List';

import sectionPage from '../gql/queries/section-page.graphql';

const SectionPage = ({ alias }) => {
  const input = { alias };
  return (
    <DefaultLayout>
      <Query query={sectionPage} variables={{ input }}>
        {({ loading, error, data }) => {
          if (loading) return <span>Loading...</span>;
          if (error) return <span>{error.message}</span>;
          const { websiteSectionAlias } = data;
          return (
            <section>
              <h1>{websiteSectionAlias.name}</h1>
              <ContentList sectionId={websiteSectionAlias.id} />
            </section>
          );
        }}
      </Query>
    </DefaultLayout>
  );
};

SectionPage.getInitialProps = async ({ query }) => {
  const { alias } = query;
  return { alias };
};

SectionPage.propTypes = {
  alias: PropTypes.string.isRequired,
};

export default SectionPage;
