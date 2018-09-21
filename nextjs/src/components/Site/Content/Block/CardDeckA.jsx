import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import WebsiteScheduledContent from '../../../Core/BlockQueries/WebsiteScheduledContent';
import CardStyleA from '../Card/StyleA';
import PlaceholderAd from '../../PlaceholderAd';

const displayName = 'Site/Content/Block/CardDeckA';

const propTypes = {
  // @todo These should be placed here by a HOC.
  className: PropTypes.string,
  query: PropTypes.shape({
    after: PropTypes.string,
    children: PropTypes.func,
    excludeContentIds: PropTypes.arrayOf(PropTypes.string),
    excludeContentTypes: PropTypes.arrayOf(PropTypes.string),
    first: PropTypes.number,
    includeContentTypes: PropTypes.arrayOf(PropTypes.string),
    requiresImage: PropTypes.bool,
    sectionBubbling: PropTypes.bool,
    sectionId: PropTypes.number.isRequired,
  }),
};

const defaultProps = {
  className: null,
  query: {},
};

/**
 * @todo Need to find a more elegant way of handling this.
 */
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
  ... on PlatformContentProduct {
    company {
      id
      name
      canonicalPath
    }
  }
`;

const BlockCardDeckA = ({ className, query }) => {
  const props = { ...query, fields };
  return (
    <WebsiteScheduledContent {...props}>
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
        if (!items.length) return null;
        return (
          <div className={classNames('row', className)}>
            {items.map((content, index) => (
              <Fragment key={content.id}>
                <div className="mb-3 col-12 col-md-6 col-lg-4">
                  <CardStyleA node={content} className="h-100" />
                </div>
                {index === 3 && (
                  <div className="mb-3 col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
                    <PlaceholderAd size="300x250" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        );
      }}
    </WebsiteScheduledContent>
  );
};

BlockCardDeckA.displayName = displayName;
BlockCardDeckA.propTypes = propTypes;
BlockCardDeckA.defaultProps = defaultProps;

export default BlockCardDeckA;
