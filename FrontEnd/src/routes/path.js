function path(root, sublink) {
  return `${root}${sublink}`;
}
const ROOTS_AUTH = "/auth";
const PATH_ROOT = "/";
const ADMIN_ROOT = "/admin";
//auth
export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
  verify: path(ROOTS_AUTH, "/verify"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  newPassword: path(ROOTS_AUTH, "/new-password"),
  forgetPassword: path(ROOTS_AUTH, "/forget-password"),
};
// Root Pages
export const PATH_PAGE = {
  landingPage: path(PATH_ROOT, ""),
  productDetails: path(PATH_ROOT, "/product-detials"),
  aboutUs: path(PATH_ROOT, "about"),
  MyCart: path(PATH_ROOT, "my-cart"),
};

// admin

export const ADMIN_PAGES = {
  Admin_Root: path(ADMIN_ROOT, "/"),
  createProduct: path(ADMIN_ROOT, "/create-product"),
  createBrand: path(ADMIN_ROOT, "/create-brand"),
  createColor: path(ADMIN_ROOT, "/create-color"),
  createCategory: path(ADMIN_ROOT, "/create-category"),
  createCoupen: path(ADMIN_ROOT, "/create-coupen"),
};
