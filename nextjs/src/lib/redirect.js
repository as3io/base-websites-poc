import Router from 'next/router';

/**
 * @param {?object} res The Express response object.
 * @param {string} href The redirect href.
 * @param {?string} asPath The redirect as path.
 * @param {number} [code=301] The redirect response code.
 */
export default (res, href, asPath, code = 301) => {
  if (res) {
    // Server-side only.
    res.writeHead(code, { Location: asPath || href });
    res.end();
  } else {
    // Client-side.
    Router.replace(href, asPath);
  }
};
