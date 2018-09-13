import redirect from './redirect';

export default (content, { res, asPath }) => {
  if (res) {
    const { redirectTo, canonicalPath } = content;
    if (redirectTo) {
      redirect(res, redirectTo);
    } else if (canonicalPath !== asPath) {
      redirect(res, canonicalPath);
    }
  }
};
