function path(root, sublink) {
  return `${root}${sublink}`;
}

const PATH_ROOT = "/";

// Root Pages
export const PATH_PAGE = {
  landingPage: path(PATH_ROOT, "landing"),
};
