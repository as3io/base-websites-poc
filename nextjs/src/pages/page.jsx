import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from '../layouts/Default';


const DynamicPage = ({ alias }) => (
  <DefaultLayout>
    <h1>
      Todo query page content type for alias:
      {' '}
      {alias}
    </h1>
  </DefaultLayout>
);

DynamicPage.getInitialProps = async ({ query }) => {
  const { alias } = query;
  return { alias };
};

DynamicPage.propTypes = {
  alias: PropTypes.string.isRequired,
};

export default DynamicPage;
