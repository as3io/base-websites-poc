import React from 'react';
import Link from 'next/link';

const SiteNavigation = () => (
  <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/section">
        <a>Section (Tactical)</a>
      </Link>
    </li>
  </ul>
);

export default SiteNavigation;
