const content = require('./content');

module.exports = (server, client) => {
  server.use('/', content(client));
};
