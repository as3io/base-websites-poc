import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { sectionAsPath } from '../../../../lib/section-paths';

import SectionLink from '../Section/Link';

const ContentSectionLinkElement = ({
  children,
  className,
  router,
  sectionAlias,
}) => {
  const asPath = sectionAsPath(sectionAlias);
  const showLink = router.asPath !== asPath;

  const link = showLink ? (
    <SectionLink className={className} sectionAlias={sectionAlias}>
      {children}
    </SectionLink>
  ) : (
    <span className={className}>{children}</span>
  );
  return link;
};

ContentSectionLinkElement.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  router: PropTypes.shape({
    asPath: PropTypes.string.isRequired,
  }).isRequired,
  sectionAlias: PropTypes.string,
};

ContentSectionLinkElement.defaultProps = {
  children: 'Home',
  className: null,
  sectionAlias: '/',
};

export default withRouter(ContentSectionLinkElement);
