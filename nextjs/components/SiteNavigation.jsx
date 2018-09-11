import React from 'react';
import Link from 'next/link';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';
import { siteName, primaryNavItems } from '../site-config.json';

import Item from './ActiveNavItem';

const SiteNavigation = () => (
  <Navbar color="primary" dark expand>
    <Link href="/" passHref>
      <NavbarBrand>{siteName}</NavbarBrand>
    </Link>
    <Nav className="mr-auto" navbar>
      {primaryNavItems
        .map(item => <Item key={item.href} href={item.href} as={item.as}>{item.name}</Item>)}
    </Nav>
  </Navbar>
);

export default SiteNavigation;
