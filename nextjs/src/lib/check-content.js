import redirect from './redirect';

export default (content, { res }) => {
  if (res) {
    // Run on server only.
    const { redirectTo } = content;
    if (redirectTo) {
      redirect(res, redirectTo);
    }
  }
};
