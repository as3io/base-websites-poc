import React from 'react';
import SectionQuery from '../components/SectionQuery';

export default () => (
  <div>
    <h1>Home</h1>
    <SectionQuery sectionId={56374}>
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
            56374
          </p>
        );
      }}
    </SectionQuery>

    <SectionQuery sectionId={59622}>
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
            59622
          </p>
        );
      }}
    </SectionQuery>
  </div>
);
