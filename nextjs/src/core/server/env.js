const { isURL } = require('validator');

const {
  port,
  cleanEnv,
  makeValidator,
} = require('envalid');

const url = makeValidator((v) => {
  const opts = { protocols: ['http', 'https'], require_tld: false, require_protocol: true };
  if (isURL(v, opts)) return v;
  throw new Error('Expected a valid URL with http or https');
});

const nonemptystr = makeValidator((v) => {
  const err = new Error('Expected a non-empty string');
  if (v === undefined || v === null || v === '') {
    throw err;
  }
  const trimmed = String(v).trim();
  if (!trimmed) throw err;
  return trimmed;
});

module.exports = cleanEnv(process.env, {
  PORT: port({ desc: 'The port that express will run on.', default: 3005 }),
  GRAPHQL_URL: url({ desc: 'The GraphQL URI for proxying/stitching API requests.' }),
  TENANT_KEY: nonemptystr({ desc: 'The Base4 tenant key to connect to.' }),
  GRAPHQL_TOKEN: nonemptystr({ desc: 'The GraphQL API token.' }),
});
