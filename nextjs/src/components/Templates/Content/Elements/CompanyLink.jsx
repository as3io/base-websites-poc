import React from 'react';
import PropTypes from 'prop-types';

import CoreLinkElement from '../../../Core/Elements/Content/Link';

const CLASS_NAME = 'content__company';

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

const ContentElementCompanyLink = ({
  children,
  className,
  company,
  tag: Tag,
}) => {
  const { id, canonicalPath, name } = company || {};
  return id && canonicalPath ? (
    <Tag className={className ? `${CLASS_NAME} ${className}` : CLASS_NAME}>
      <CoreLinkElement className="content__link" contentId={id} asPath={canonicalPath}>
        {children || name}
      </CoreLinkElement>
    </Tag>
  ) : null;
};

ContentElementCompanyLink.propTypes = propTypes;
ContentElementCompanyLink.defaultProps = defaultProps;

export default ContentElementCompanyLink;
