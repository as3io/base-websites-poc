import React from 'react';

import { withWebsiteSection, withWebsiteSectionPropTypes } from '../../core/WithWebsiteSection';
import DefaultLayout from '../../layouts/Default';

const LayoutASectionPage = ({ section }) => (
  <DefaultLayout>
    <h1>{section.name}</h1>
    <h2>LayoutA override</h2>
  </DefaultLayout>
);

LayoutASectionPage.propTypes = {
  // Apply the `withWebsiteSection` prop types
  ...withWebsiteSectionPropTypes,
};

export default withWebsiteSection(LayoutASectionPage);
