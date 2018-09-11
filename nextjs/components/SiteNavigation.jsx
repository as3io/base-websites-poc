import React from 'react';
import Link from 'next/link';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';

import ActiveNavItem from './ActiveNavItem';

const SiteNavigation = () => (
  <Navbar color="primary" dark expand>
    <Link href="/" passHref>
      <NavbarBrand>Officer</NavbarBrand>
    </Link>
    <Nav className="mr-auto" navbar>
      <ActiveNavItem href="/">Home</ActiveNavItem>
      <ActiveNavItem href="/section">Tactical</ActiveNavItem>
    </Nav>
  </Navbar>
);

export default SiteNavigation;
