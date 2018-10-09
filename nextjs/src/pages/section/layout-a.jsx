import React from 'react';
import gql from 'graphql-tag';

import { withWebsiteSection, withWebsiteSectionPropTypes } from '../../core/WithWebsiteSection';
import DefaultLayout from '../../layouts/Default';

// NOTE: this could be placed in a .graphql file and imported.
const fragment = gql`
  fragment SectionLayoutA on WebsiteSection {
    children {
      edges {
        node {
          id
          name
          alias
        }
      }
    }
  }
`;

const SectionLayoutA = ({ section }) => (
  <DefaultLayout>
    <h1>{section.name}</h1>
    <h2>LayoutA override</h2>
  </DefaultLayout>
);

SectionLayoutA.propTypes = {
  // Apply the `withWebsiteSection` prop types
  ...withWebsiteSectionPropTypes,
};

export default withWebsiteSection(SectionLayoutA, { fragment });
