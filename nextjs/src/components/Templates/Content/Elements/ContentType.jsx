import React from 'react';
import PropTypes from 'prop-types';
import titleizeType from '../../../../lib/titlelize-type';

import Field from '../Field';

const displayName = 'Templates/Content/Elements/ContentType';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.shape({
    type: PropTypes.string,
  }),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  children: null,
  className: null,
  content: {},
  tag: 'span',
};

const ContentType = ({
  children,
  className,
  content,
  tag,
}) => {
  const { type } = content || {};
  return children || type ? (
    <Field tag={tag} name="type" className={className}>
      {children || titleizeType(type)}
    </Field>
  ) : null;
};

ContentType.displayName = displayName;
ContentType.propTypes = propTypes;
ContentType.defaultProps = defaultProps;

export default ContentType;
