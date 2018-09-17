import React from 'react';
import PropTypes from 'prop-types';

import SectionQuery from '../SectionQuery';
import ContentCardHero from './Card/Hero';
import ContentTitle from '../Elements/Content/Title';
import ContentSectionLink from '../Elements/Content/SectionLink';
import DateElement from '../Elements/Date';

const ContentList = ({ sectionId }) => (
  <SectionQuery sectionId={sectionId} first={7} requiresImage>
    {({ loading, error, data }) => {
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
      const scheduled = data.websiteScheduledPlatformContent;
      const heroEdge = scheduled.edges[0];
      return (
        <div className="row">
          <div className="col-lg-8">
            <ContentCardHero {...heroEdge.node.content} />
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="list-group list-group-flush">
                {scheduled.edges.map((edge, index) => {
                  if (index === 0) return null;
                  const { node } = edge;
                  const { content } = node;
                  const {
                    id,
                    shortName,
                    canonicalPath,
                    published,
                    primarySection,
                  } = content;
                  return (
                    <div key={content.id} className="list-group-item">
                      <ContentTitle
                        title={shortName}
                        tag="h5"
                        className="card-title"
                        contentId={id}
                        asPath={canonicalPath}
                      />
                      <small className="card-text">
                        <ContentSectionLink className="mr-2" sectionAlias={primarySection.alias}>
                          {primarySection.name}
                        </ContentSectionLink>
                        <DateElement value={published} />
                      </small>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }}
  </SectionQuery>
);

ContentList.propTypes = {
  sectionId: PropTypes.number.isRequired,
};

export default ContentList;
