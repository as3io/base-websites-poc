import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import contentHref from '../../../../lib/content-paths';
import createMarkup from '../../../../lib/create-markup';

const BEM = 'content__link';

const ContentLinkElement = ({
  asPath,
  children,
  className,
  contentId,
  html,
}) => {
  const classNames = className ? `${BEM} ${className}` : BEM;
  return (
    <Link href={contentHref(contentId)} as={asPath}>
      {html ? (
        // eslint-disable-next-line react/no-danger
        <a className={classNames} dangerouslySetInnerHTML={createMarkup(html)} />
      ) : (
        <a className={classNames}>{children}</a>
      )}
    </Link>
  );
};

ContentLinkElement.propTypes = {
  asPath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  contentId: PropTypes.number.isRequired,
  html: PropTypes.string,
};

ContentLinkElement.defaultProps = {
  className: null,
  html: null,
};

export default ContentLinkElement;
