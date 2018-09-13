import redirect from './redirect';

export default (content, { res }) => {
  if (res) {
    // Run on server only.
    console.info('checking content...');
    const { redirectTo } = content;
    if (redirectTo) {
      console.info('redirecting externally...');
      redirect(res, redirectTo);
    }
  }
};
