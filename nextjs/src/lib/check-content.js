import redirect from './redirect';
import contentHref from './content-paths';

/**
 * @param {object} content The content object from GraphQL.
 * @param {object} ctx The NextJS context object.
 * @param {?object} ctx.res The Experss response object.
 * @param {string} ctx.asPath The Next Router `as` path.
 */
export default (content, { res, asPath }) => {
  const { id, redirectTo, canonicalPath } = content;
  if (redirectTo) {
    redirect(res, redirectTo);
    return true;
  }
  if (canonicalPath !== asPath) {
    redirect(res, contentHref(id), canonicalPath);
    return true;
  }
  return false;
};
