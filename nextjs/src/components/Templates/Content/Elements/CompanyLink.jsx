import React from 'react';
import PropTypes from 'prop-types';

import CoreLink from '../../../Core/Elements/Content/Link';

const BEM = 'content__company';

const displayName = 'Templates/Content/Elements/CompanyLink';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  company: PropTypes.shape({
    id: PropTypes.number,
    canonicalPath: PropTypes.string,
    name: PropTypes.string,
  }),
  tag: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: null,
  company: {},
  tag: 'p',
};

const CompanyLink = ({
  children,
  className,
  company,
  tag: Tag,
}) => {
  const { id, canonicalPath, name } = company || {};
  return id && canonicalPath ? (
    <Tag className={className ? `${BEM} ${className}` : BEM}>
      <CoreLink className="content__link" contentId={id} asPath={canonicalPath}>
        {children || name}
      </CoreLink>
    </Tag>
  ) : null;
};

CompanyLink.displayName = displayName;
CompanyLink.propTypes = propTypes;
CompanyLink.defaultProps = defaultProps;

export default CompanyLink;
