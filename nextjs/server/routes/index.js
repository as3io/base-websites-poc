const content = require('./story');

module.exports = (server, client) => {
  server.use('/', content(client));
};
