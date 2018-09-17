import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';

const SectionTag = ({
  alias,
  children,
  className,
  router,
}) => {
  const asPath = `/section/${alias}`;
  const showLink = router.asPath !== asPath;

  const link = showLink ? (
    <Link href={`/section?alias=${alias}`} as={asPath}>
      <a className={className}>{children}</a>
    </Link>
  ) : (
    <span className={className}>{children}</span>
  );
  return link;
};

SectionTag.propTypes = {
  className: PropTypes.string,
  alias: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({
    asPath: PropTypes.string.isRequired,
  }).isRequired,
};

SectionTag.defaultProps = {
  className: null,
};

export default withRouter(SectionTag);
