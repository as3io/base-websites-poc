import React from 'react';
import SectionQuery from '../components/SectionQuery';
import DefaultLayout from '../layouts/Default';

export default () => (
  <DefaultLayout>
    <h1>Section (Tactical)</h1>
    <SectionQuery sectionId={56156}>
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
            56156-tactical/firearms
          </p>
        );
      }}
    </SectionQuery>

    <SectionQuery sectionId={56178}>
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
            56178-tactical/flashlights
          </p>
        );
      }}
    </SectionQuery>
  </DefaultLayout>
);
