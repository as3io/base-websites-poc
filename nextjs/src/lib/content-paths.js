const ROOT_HREF_PATH = '/content?id';

/**
 * @package Core
 * @param {string} alias
 */
export default id => `${ROOT_HREF_PATH}=${id}`;
