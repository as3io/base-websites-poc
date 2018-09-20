import React from 'react';
import PropTypes from 'prop-types';

import Field from '../Field';
import Link from '../Link';

const displayName = 'Templates/Content/Elements/CompanyLink';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  company: PropTypes.shape({
    id: PropTypes.number,
    canonicalPath: PropTypes.string,
    name: PropTypes.string,
  }),
  linkClassName: PropTypes.string,
  prefix: PropTypes.string,
  tag: PropTypes.string,
  type: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: null,
  company: {},
  linkClassName: null,
  prefix: null,
  tag: 'span',
  type: undefined,
};

const CompanyLink = ({
  children,
  className,
  company,
  prefix,
  linkClassName,
  tag,
  type,
}) => {
  const { id, canonicalPath, name } = company || {};
  return id && canonicalPath && (children || name) ? (
    <Field tag={tag} name="company" className={className}>
      {prefix && `${prefix} `}
      <Link
        id={id}
        canonicalPath={canonicalPath}
        type={type}
        className={linkClassName}
      >
        {children || name}
      </Link>
    </Field>
  ) : null;
};

CompanyLink.displayName = displayName;
CompanyLink.propTypes = propTypes;
CompanyLink.defaultProps = defaultProps;

export default CompanyLink;
