const graphql = require('./graphql');

module.exports = (server, client) => {
  /**
   * Core GraphQL route.
   */
  server.use('/graphql', graphql);

  /**
   * Ensure `/home` redirects to `/`.
   */
  server.get('/home', (req, res) => res.redirect(301, '/'));

  /**
   * Page routing.
   *
   * Examples:
   * `/page/some-page-content-alias`
   */
  server.get('/page/:alias', (req, res) => {
    const { alias } = req.params;
    // @todo lookup content by { type: 'Page', alias }
    res.json({ alias });
  });

  /**
   * Section routing.
   *
   * Examples:
   * `/section/parent-section-name`
   * `/section/parent-section-name/child-section-name`
   */
  server.get('/section/:alias(*)', (req, res) => {
    const { alias } = req.params;
    const actualPage = '/section';
    const props = { alias };
    client.render(req, res, actualPage, props);
  });

  /**
   * Root 8-digit content ID routing.
   *
   * Examples:
   * `/21020171`
   */
  server.get('/:id(\\d{8})', (req, res) => {
    const { id } = req.params;
    const actualPage = '/content';
    const props = { id };
    client.render(req, res, actualPage, props);
  });

  /**
   * Content routing (with section prefix).
   *
   * Examples:
   * `/parent-section-name/press-release/21020171/the-content-slug`
   * `/parent-section-name/child-section-name/press-release/21020171/the-content-slug`
   */
  server.get('/*/:type/:id(\\d{8})/:slug', (req, res) => {
    const { id } = req.params;
    const actualPage = '/content';
    const props = { id };
    client.render(req, res, actualPage, props);
  });
};
