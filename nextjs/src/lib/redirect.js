import Router from 'next/router';

export default (res, target, code = 301) => {
  if (res) {
    // Server-side only.
    res.writeHead(code, { Location: target });
    res.end();
  } else {
    // Client-side. Pretend this never happened.
    Router.replace(target);
  }
};
