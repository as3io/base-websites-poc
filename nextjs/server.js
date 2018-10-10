/* eslint-disable no-console */
const next = require('next');
const helmet = require('helmet');
const express = require('express');
const compression = require('compression');
const { graphql, env } = require('./src/core/server');
const routes = require('./routes');

const { PORT, isProduction } = env;

const app = next({ dev: !isProduction, dir: './src' });

app.prepare().then(() => {
  express()
    .use(helmet())
    .use(compression())
    .use('/graphql', graphql.router) // @todo Make this a function
    .use(routes.getRequestHandler(app))
    .listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
