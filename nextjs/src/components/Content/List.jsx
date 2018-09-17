import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';

import SectionQuery from '../SectionQuery';
import ContentListItem from './ListItem';
import ContentCardHero from './Card/Hero';

const ContentList = ({ sectionId }) => (
  <Card>
    <SectionQuery sectionId={sectionId} first={10} requiresImage>
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
        return (
          <div>
            {scheduled.edges.map((edge, index) => {
              const { node } = edge;
              const { content } = node;
              if (index === 0) {
                return <ContentCardHero key={content.id} {...content} />;
              }
              return <ContentListItem key={content.id} {...content} />;
            })}
          </div>
        );
      }}
    </SectionQuery>
  </Card>
);

ContentList.propTypes = {
  sectionId: PropTypes.number.isRequired,
};

export default ContentList;
