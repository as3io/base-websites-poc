import React from 'react';
import SectionQuery from '../components/SectionQuery';
import DefaultLayout from '../layouts/Default';

export default () => (
  <DefaultLayout>
    <h1>Home</h1>
    <SectionQuery sectionId={56155}>
      {({ loading, error }) => {
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

        return (
          <p>
            Loaded
            {' '}
            56155-home
          </p>
        );
      }}
    </SectionQuery>
  </DefaultLayout>
);
