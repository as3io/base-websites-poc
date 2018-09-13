import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from '../layouts/Default';
import ContentList from '../components/Content/List';
import is404 from '../lib/is-404';

import sectionPage from '../gql/queries/section-page.graphql';

const SectionPage = ({ section }) => (
  <DefaultLayout>
    <section>
      <h1>{section.name}</h1>
      <ContentList sectionId={section.id} />
    </section>
  </DefaultLayout>
);

SectionPage.getInitialProps = async (ctx) => {
  const { query, apollo, res } = ctx;
  const { alias } = query;
  const input = { alias };
  const variables = { input };

  try {
    // @todo Should this be a watch query?
    const { data } = await apollo.query({ query: sectionPage, variables });
    const { websiteSectionAlias } = data;
    return { section: websiteSectionAlias };
  } catch (e) {
    if (res) res.statusCode = 500;
    if (is404(e)) {
      e.code = 'ENOENT';
      if (res) res.statusCode = 404;
    }
    throw e;
  }
};

SectionPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  section: PropTypes.object.isRequired,
};

export default SectionPage;
