import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import SectionLink from '../Section/Link';

const ContentSectionLinkElement = ({
  children,
  className,
  router,
  sectionAlias,
}) => {
  const asPath = `/section/${sectionAlias}`;
  const showLink = router.asPath !== asPath;

  const link = showLink ? (
    <SectionLink className={className} sectionAlias={sectionAlias} asPath={asPath}>
      {children}
    </SectionLink>
  ) : (
    <span className={className}>{children}</span>
  );
  return link;
};

ContentSectionLinkElement.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  router: PropTypes.shape({
    asPath: PropTypes.string.isRequired,
  }).isRequired,
  sectionAlias: PropTypes.string.isRequired,
};

ContentSectionLinkElement.defaultProps = {
  className: null,
};

export default withRouter(ContentSectionLinkElement);
