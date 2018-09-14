import React from 'react';
import Link from 'next/link';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';
import { siteName, primaryNavItems, siteLogo } from '../site-config.json';

import Item from './ActiveNavItem';

const SiteNavigation = () => (
  <Navbar color="dark" className="sticky-top" dark expand>
    <Link href="/" passHref>
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
        .map(item => <Item key={item.href} href={item.href} as={item.as}>{item.name}</Item>)}
    </Nav>
  </Navbar>
);

export default SiteNavigation;
