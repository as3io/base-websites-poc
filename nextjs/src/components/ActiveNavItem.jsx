import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';
import { withRouter } from 'next/router';
import { Link } from '../../routes';

const ActiveNavItem = ({
  children,
  router,
  route,
  title,
}) => {
  const navItemPath = route;
  const stripped = navItemPath.replace(/^\/section/, '');

  let isActive = false;
  if (navItemPath === router.asPath) {
    isActive = true;
  } else if (stripped !== '/' && (new RegExp(`^${stripped}`)).test(router.asPath)) {
    isActive = true;
  } else if (navItemPath.indexOf('/section') === 0 && (new RegExp(`^${navItemPath}`)).test(router.asPath)) {
    isActive = true;
  }

  return (
    <NavItem active={isActive}>
      <Link route={route} passHref>
        <NavLink title={title}>{children}</NavLink>
      </Link>
    </NavItem>
  );
};

ActiveNavItem.propTypes = {
  title: PropTypes.string,
  route: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  router: PropTypes.shape({
    asPath: PropTypes.string.isRequired,
  }).isRequired,
};

ActiveNavItem.defaultProps = {
  title: null,
};

export default withRouter(ActiveNavItem);
