import React from 'react';

import { withWebsiteSection, withWebsiteSectionPropTypes } from '../core/WithWebsiteSection';
import DefaultLayout from '../layouts/Default';

const SectionPage = ({ section, requestOrigin }) => (
  <DefaultLayout>
    <h1>{section.name}</h1>
    <small>{requestOrigin}</small>
  </DefaultLayout>
);

SectionPage.propTypes = {
  // Apply the `withWebsiteSection` prop types
  ...withWebsiteSectionPropTypes,
};

export default withWebsiteSection(SectionPage);
