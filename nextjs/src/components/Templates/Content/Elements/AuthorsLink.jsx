import React from 'react';
import PropTypes from 'prop-types';

import CoreLink from '../../../Core/Elements/Content/Link';

const BEM = 'content__authors';

const displayName = 'Templates/Content/Elements/AuthorsLink';

const propTypes = {
  className: PropTypes.string,
  // Example: `{ authors: { edges: [ { node: { id: 1234 } } ] } }`
  authors: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.number,
          fullName: PropTypes.string,
          canonicalPath: PropTypes.string,
        }),
      }),
    ),
  }),
  tag: PropTypes.string,
};

const defaultProps = {
  className: null,
  authors: {},
  tag: 'span',
};

/**
 * @todo This component can be reused for any Contact relationship.
 *       Make generic so it can be used with contributors, etc.
 */
const AuthorsLink = ({
  className,
  authors,
  tag: Tag,
}) => {
  // Ensure `authors` is treated as an object and `edges` is treated as an array.
  const { edges = [] } = authors || {};

  // If no author edges were found. Collapse the element.
  if (!edges.length) return null;

  // Only include nodes that are linkable
  // (e.g. contain a value for `id`, `canonicalPath`, `fullName`)
  // Then map to content link components.
  const nodes = edges
    .map(edge => edge.node)
    .filter(node => node && node.id && node.canonicalPath && node.fullName);
  // If no eligible nodes were found. Collapse the element.
  if (!nodes.length) return null;

  // Wrap with a container element and map the nodes to content link components.
  return (
    <Tag className={className ? `${BEM} ${className}` : BEM}>
      {nodes.map((node) => {
        const { id, fullName, canonicalPath } = node;
        return (
          <CoreLink key={id} className="content__link" contentId={id} asPath={canonicalPath}>
            {fullName}
          </CoreLink>
        );
      })}
    </Tag>
  );
};

AuthorsLink.displayName = displayName;
AuthorsLink.propTypes = propTypes;
AuthorsLink.defaultProps = defaultProps;

export default AuthorsLink;
