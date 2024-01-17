function path(root, sublink) {
  return `${root}${sublink}`;
}
const ROOTS_AUTH = "/auth";
const PATH_ROOT = "/";
//auth
export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
  // loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  // registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, "/verify"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  newPassword: path(ROOTS_AUTH, "/new-password"),
};
// Root Pages
export const PATH_PAGE = {
  landingPage: path(PATH_ROOT, ""),
  aboutUs: path(PATH_ROOT, "about"),
  MyCart: path(PATH_ROOT, "my-cart"),
};
