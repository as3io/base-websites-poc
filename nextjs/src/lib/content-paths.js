const ROOT_HREF_PATH = '/content?id';

/**
 * @package Core
 * @param {string} alias
 */
export const contentHref = (id) => `${ROOT_HREF_PATH}=${id}`;
