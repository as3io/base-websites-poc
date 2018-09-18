import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../ListItems/Content/SectionLinkTitle';

import SectionQuerySimple from '../Core/BlockQueries/SectionQuerySimple';
import ContentCardStandard from '../Templates/Content/Card/Standard';

const fields = `
  id
  name
  shortName
  teaser
  type
  canonicalPath
  published
  primaryImage {
    id
    src(input: { host: "cdn.officer.com" })
    alt
  }
  primarySection {
    id
    name
    alias
  }
`;

const ContentList = ({ sectionId }) => (
  <SectionQuerySimple sectionId={sectionId} fields={fields} first={7} requiresImage includeContentTypes={['Product']}>
    {({ loading, error, items }) => {
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
      const hero = items[0];
      if (!hero) return null;
      return (
        <div className="row">
          <div className="col-lg-8">
            <ContentCardStandard content={hero} />
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="list-group list-group-flush">
                {items.map((content, index) => {
                  if (index === 0) return null;
                  return (
                    <ListItem key={content.id} {...content} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }}
  </SectionQuerySimple>
);

ContentList.propTypes = {
  sectionId: PropTypes.number.isRequired,
};

export default ContentList;
