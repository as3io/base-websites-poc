import React from 'react';

import { withWebsiteSection, withWebsiteSectionPropTypes } from '../../core/WithWebsiteSection';
import DefaultLayout from '../../layouts/Default';
import BlockHeroA from '../../components/Site/Content/Block/HeroA';
import BlockCardListGroupA from '../../components/Site/Content/Block/CardListGroupA';
import BlockCardDeckA from '../../components/Site/Content/Block/CardDeckA';
import PlaceholderAd from '../../components/Site/PlaceholderAd';

const TacticalSectionPage = ({ section }) => (
  <DefaultLayout>
    <main>
      <h1>{section.name}</h1>
      <BlockHeroA
        className="mb-3"
        query={{
          sectionId: section.id,
          first: 7,
          requiresImage: true,
        }}
      />
      <hr />
      <div className="row">
        <div className="col-lg-4">
          <BlockCardListGroupA
            className="my-3"
            header="Products"
            query={{
              sectionId: section.id,
              first: 4,
              includeContentTypes: ['Product'],
              requiresImage: true,
            }}
          />
        </div>
        <div className="col-lg-4 p-0">
          <PlaceholderAd size="300x600" className="my-3" />
        </div>
        <div className="col-lg-4">
          <BlockCardListGroupA
            className="my-3"
            header="Firearms"
            query={{
              sectionId: 56156,
              first: 4,
              requiresImage: true,
            }}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-4">
          <BlockCardListGroupA
            className="my-3"
            header="News"
            query={{
              sectionId: section.id,
              first: 4,
              includeContentTypes: ['News', 'PressRelease'],
              requiresImage: true,
            }}
          />
        </div>
        <div className="col-lg-4">
          <BlockCardListGroupA
            className="my-3"
            header="Features"
            query={{
              sectionId: section.id,
              first: 4,
              includeContentTypes: ['Article', 'Blog', 'MediaGallery'],
              requiresImage: true,
            }}
          />
        </div>
        <div className="col-lg-4">
          <BlockCardListGroupA
            className="my-3"
            header="Video"
            query={{
              sectionId: section.id,
              first: 4,
              includeContentTypes: ['Video'],
              requiresImage: true,
            }}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-4 p-0">
          <PlaceholderAd size="300x600" className="my-3" />
        </div>
        <div className="col-lg-4 p-0" />
        <div className="col-lg-4 p-0">
          <PlaceholderAd size="300x600" className="my-3" />
        </div>
      </div>
      <hr />
      <BlockCardDeckA
        query={{
          sectionId: section.id,
          first: 8,
        }}
      />
    </main>
  </DefaultLayout>
);

TacticalSectionPage.propTypes = {
  // Apply the `withWebsiteSection` prop types
  ...withWebsiteSectionPropTypes,
};

export default withWebsiteSection(TacticalSectionPage);
