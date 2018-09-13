import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const RelCanonical = ({ origin, pathname }) => (
  <Head>
    <link rel="canonical" href={`${origin}${pathname}`} />
  </Head>
);

RelCanonical.propTypes = {
  pathname: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
};

export default RelCanonical;
