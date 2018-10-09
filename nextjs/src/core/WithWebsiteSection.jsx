import React, { Component } from 'react';
import PropTypes from 'prop-types';

import displayName from './utils/component-display-name';
import sectionPath from './utils/section-path';
import redirect from './utils/redirect';
import httpErrors from './utils/http-errors';

import sectionQuery from './gql/queries/with-website-section.graphql';

import { withRequestOrigin, withRequestOriginPropTypes } from './WithRequestOrigin';

import RelCanonical from './components/RelCanonical';

export const withWebsiteSectionPropTypes = {
  canonicalPath: PropTypes.string.isRequired,
  section: PropTypes.shape({
    id: PropTypes.number.isRequired,
    alias: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    seoTitle: PropTypes.string,
  }),
  ...withRequestOriginPropTypes,
};

export const withWebsiteSection = (Page, options = {
  basePath: 'section',
}) => {
  class WithWebsiteSection extends Component {
    /**
     *
     */
    static async getInitialProps(ctx) {
      // Await the props of the Page
      let pageProps;
      if (Page.getInitialProps) {
        pageProps = await Page.getInitialProps(ctx);
      }

      const { query, apollo, res } = ctx;
      // Get the section alias from the page query.
      // Note: the section alias is required for this HOC to function properly.
      const { alias } = query;

      // Query for the website section using the alias, via the injected apollo client.
      const input = { alias };
      const variables = { input };
      const { data } = await apollo.query({ query: sectionQuery, variables });
      const { websiteSectionAlias, websiteSectionRedirect } = data;

      if (websiteSectionAlias) {
        // The website section was found. Return it allong with the page props.
        const canonicalPath = sectionPath(alias, options.basePath);
        return { section: websiteSectionAlias, canonicalPath, ...pageProps };
      }

      if (websiteSectionRedirect && websiteSectionRedirect.alias) {
        // A redirect was found for this section alias. Force a redirect.
        const { alias: redirectAlias } = websiteSectionRedirect;
        const path = sectionPath(redirectAlias, options.basePath);
        redirect(res, path);
        return { section: {}, canonicalPath: path, ...pageProps };
      }

      // No website section or redirect was found for this alias. Return a 404.
      throw httpErrors.notFound(`No website section was found for alias '${alias}'`);
    }

    /**
     *
     */
    render() {
      const { requestOrigin, canonicalPath } = this.props;
      return (
        <>
          <RelCanonical origin={requestOrigin} pathname={canonicalPath} />
          <Page {...this.props} />
        </>
      );
    }
  }
  WithWebsiteSection.displayName = `WithWebsiteSection(${displayName(Page)})`;
  return withRequestOrigin(WithWebsiteSection);
};
