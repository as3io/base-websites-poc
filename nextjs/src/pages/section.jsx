import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from '../layouts/Default';
import ContentList from '../components/Content/List';
import redirect from '../lib/redirect';
import errors from '../lib/errors';
import { sectionAsPath, sectionHref } from '../lib/section-paths';

import sectionPage from '../gql/queries/section-page.graphql';

const SectionPage = ({ section }) => (
  <DefaultLayout>
    <main>
      <h1>{section.name}</h1>
      <ContentList sectionId={section.id} />
    </main>
  </DefaultLayout>
);

SectionPage.getInitialProps = async (ctx) => {
  const { query, apollo, res } = ctx;
  const { alias } = query;
  const input = { alias };
  const variables = { input };

  // @todo Should this be a watch query?
  // @todo Do we still need try/catch?
  const { data } = await apollo.query({ query: sectionPage, variables });
  const { websiteSectionAlias, websiteSectionRedirect } = data;
  if (websiteSectionAlias) {
    return { section: websiteSectionAlias };
  }
  if (websiteSectionRedirect && websiteSectionRedirect.alias) {
    const { alias: redirectAlias } = websiteSectionRedirect;
    redirect(res, sectionHref(redirectAlias), sectionAsPath(redirectAlias));
    return {};
  }
  throw errors.notFound();
};

SectionPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  section: PropTypes.object.isRequired,
};

export default SectionPage;
