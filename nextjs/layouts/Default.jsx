import React from 'react';
import PropTypes from 'prop-types';
import SiteNavigation from '../components/SiteNavigation';

const DefaultLayout = ({ children }) => (
  <main>
    <SiteNavigation />
    {children}
  </main>
);

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DefaultLayout;
