import React from 'react';
// import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from '../../routes';
import { siteName, primaryNavItems, siteLogo } from '../site-config.json';

import Item from './ActiveNavItem';

const SiteNavigation = () => (
  <Navbar color="dark" className="sticky-top shadow" dark expand>
    <Link route="home" passHref>
      <NavbarBrand>
        {siteLogo && siteLogo.length ? (
          <img src={siteLogo} alt={siteName} title={siteName} height={25} />
        ) : (
          siteName
        )}
      </NavbarBrand>
    </Link>
    <Nav className="mr-auto" navbar>
      {primaryNavItems
        .map((item) => {
          if (item.href) {
            // External link. @todo Add support for this more generically.
            return (
              <NavItem key={item.href}>
                <NavLink href={item.href}>{item.name}</NavLink>
              </NavItem>
            );
          }
          return <Item key={item.route} route={item.route}>{item.name}</Item>;
        })
      }
    </Nav>
  </Navbar>
);

export default SiteNavigation;
