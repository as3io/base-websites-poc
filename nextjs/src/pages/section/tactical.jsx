import React from 'react';

import { withWebsiteSection, withWebsiteSectionPropTypes } from '../../core/WithWebsiteSection';
import DefaultLayout from '../../layouts/Default';

const TacticalSectionPage = ({ section }) => (
  <DefaultLayout>
    <h1>{section.name}</h1>
    <h2>Tactical override</h2>
  </DefaultLayout>
);

TacticalSectionPage.propTypes = {
  // Apply the `withWebsiteSection` prop types
  ...withWebsiteSectionPropTypes,
};

export default withWebsiteSection(TacticalSectionPage);
