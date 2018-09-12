const content = require('./content');
const graphql = require('./graphql');

module.exports = (server, client) => {
  server.use('/graphql', graphql);
  server.use('/', content(client));
};
