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
   * Content routing.
   * Matches any path that contains an 8-digit ID anywhere within it.
   *
   */
  server.get('/:prefix(*):id(\\d{8}):suffx(*)', (req, res) => {
    const { id } = req.params;
    const actualPage = '/content';
    const props = { id };
    client.render(req, res, actualPage, props);
  });
};
