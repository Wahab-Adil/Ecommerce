import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
// path
import { PATH_PAGE, PATH_AUTH } from "./path";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={"Loading..."}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Auth routes
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        //   { path: "login-unprotected", element: <Login /> },
        // { path: "register-unprotected", element: <Register /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "new-password", element: <NewPassword /> },
        { path: "verify", element: <VerifyCode /> },
      ],
    },
    // main pages before login
    {
      path: "/",
      children: [
        { path: PATH_PAGE.landingPage, exact: true, element: <Landing /> },
        { path: PATH_PAGE.aboutUs, element: <AboutUs /> },
      ],
    },
  ]);
}

// MAIN
const Landing = Loadable(lazy(() => import("../pages/Landing.js")));
const AboutUs = Loadable(lazy(() => import("../pages/about/aboutUs.js")));

// AUTHENTICATION
const Login = Loadable(lazy(() => import("../pages/auth/Login")));
const Register = Loadable(lazy(() => import("../pages/auth/Register")));
const ResetPassword = Loadable(
  lazy(() => import("../pages/auth/ResetPassword"))
);
const NewPassword = Loadable(lazy(() => import("../pages/auth/NewPassword")));
const VerifyCode = Loadable(lazy(() => import("../pages/auth/VerifyCode")));
