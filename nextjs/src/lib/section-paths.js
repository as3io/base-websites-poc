const ROOT_AS_PATH = '/section';
const ROOT_HREF_PATH = '/section?alias';

/**
 * @package Core
 * @param {string} alias
 */
export const cleanAlias = alias => String(alias).replace(/^\/+/, '').replace(/\/+$/, '');

/**
 * @package Core
 * @param {string} alias
 */
export const sectionAsPath = (alias) => {
  if (!alias || alias === '/') return '/';
  return `${ROOT_AS_PATH}/${cleanAlias(alias)}`;
};

/**
 * @package Core
 * @param {string} alias
 */
export const sectionHref = (alias) => {
  if (!alias || alias === '/') return `${ROOT_HREF_PATH}=home`;
  return `${ROOT_HREF_PATH}=${cleanAlias(alias)}`;
};
