import cleanPath from './clean-path';

export const shouldGoToIndex = (alias) => {
  const path = cleanPath(alias);
  if (path === 'home' || path === '') return true;
  return false;
};

/**
 * Generates the website section `asPath` (as used by the NextJS router).
 *
 * By default, if the section alias were `tactical/firearms`, this method
 * would generate `/section/tactical/firearms`.
 *
 * The `basePath` (the default is 'section') can also be overriden by passing a different value.
 *
 * @param {string} alias The website section alias
 * @param {string} [basePath=section] The section base path.
 */
export const sectionAsPath = (alias, basePath = 'section') => {
  if (shouldGoToIndex(alias)) return '/';

  const path = cleanPath(alias);
  if (!basePath) return `/${path}`;
  return `/${cleanPath(basePath)}/${path}`;
};

/**
 * Generates the website section `href` (as used by the NextJS router).
 *
 * By default, if the section alias were `tactical/firearms`, this method
 * would generate `/section?alias=tactical/firearms`.
 *
 * The `basePath` (the default is 'section') can also be overriden by passing a different value.
 * The `alias` query param, however, cannont be changed.
 *
 * @param {string} alias The website section alias
 * @param {string} [basePath=section] The section base path.
 */
export const sectionHref = (alias, basePath = 'section') => {
  if (shouldGoToIndex(alias)) return '/';
  return `/${cleanPath(basePath)}?alias=${cleanPath(alias)}`;
};
