import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';

import SectionQuery from '../SectionQuery';
import ContentListItem from './ListItem';

const ContentList = ({ sectionId }) => (
  <Card>
    <SectionQuery sectionId={sectionId} first={10}>
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
            {scheduled.edges.map((edge) => {
              const { node } = edge;
              const { content } = node;
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
