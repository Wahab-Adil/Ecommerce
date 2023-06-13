import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

// path
import { PATH_PAGE } from "./path";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={"Loading..."}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // pages
    {
      path: "/",
      children: [{ path: PATH_PAGE.landingPage, element: <Landing /> }],
    },
  ]);
}

// MAIN
const Landing = Loadable(lazy(() => import("../pages/Landing.jsx")));
