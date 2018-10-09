/* eslint-disable */

const fetch = require('isomorphic-unfetch');
const fs = require('fs');
const env = require('./src/core/server/env');

const { GRAPHQL_URL, TENANT_KEY, GRAPHQL_TOKEN } = env;

// @see https://www.apollographql.com/docs/react/advanced/fragments.html

fetch(GRAPHQL_URL, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${GRAPHQL_TOKEN}`,
    'x-tenant-key': TENANT_KEY,
  },
  body: JSON.stringify({
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
}).then(result => result.json()).then(result => {
  // here we're filtering out any type information unrelated to unions or interfaces
  const filteredData = result.data.__schema.types.filter(
    type => type.possibleTypes !== null,
  );
  result.data.__schema.types = filteredData;
  fs.writeFile('./src/apollo/fragment-types.json', JSON.stringify(result.data), err => {
    if (err) console.error('Error writing fragmentTypes file', err);
    console.log('Fragment types successfully extracted!');
  });
});
