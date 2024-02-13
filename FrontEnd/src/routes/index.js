import React, { Suspense, lazy } from "react";
import { useRoutes, Outlet } from "react-router-dom";
// path
import { PATH_PAGE, PATH_AUTH, ADMIN_PAGES } from "./path";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={"Loading..."}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/admin",
      element: (
        <DashBoard>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashBoard>
      ),
      children: [
        {
          path: ADMIN_PAGES.createProduct,
          element: <CreateProduct />,
        },
        {
          path: ADMIN_PAGES.createBrand,
          element: <CreateBrand />,
        },
        {
          path: ADMIN_PAGES.createColor,
          element: <CreateColor />,
        },
        {
          path: ADMIN_PAGES.createCategory,
          element: <CreateCategory />,
        },
        {
          path: ADMIN_PAGES.createCoupen,
          element: <CreateCoupen />,
        },
      ],
    },

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

        { path: "reset-password", element: <ResetPassword /> },
        { path: "new-password", element: <NewPassword /> },
        { path: "forget-password", element: <ForgetPassword /> },
        { path: "verify", element: <VerifyCode /> },
      ],
    },
    // main pages before login
    {
      path: "/",
      children: [
        { path: PATH_PAGE.landingPage, exact: true, element: <Landing /> },

        {
          path: PATH_PAGE.productDetails,
          element: <ProductDetails />,
        },
        { path: PATH_PAGE.aboutUs, element: <AboutUs /> },
        { path: PATH_PAGE.MyCart, element: <MyCart /> },
      ],
    },
  ]);
}
// admin routes
const DashBoard = Loadable(lazy(() => import("../layouts/dashboard")));
const CreateProduct = Loadable(
  lazy(() => import("../pages/admin/product/create/index.js"))
);
const CreateBrand = Loadable(lazy(() => import("../pages/admin/brand/create")));
const CreateColor = Loadable(
  lazy(() => import("../pages/admin/color/create/index.js"))
);
const CreateCategory = Loadable(
  lazy(() => import("../pages/admin/category/create/index.js"))
);
const CreateCoupen = Loadable(
  lazy(() => import("../pages/admin/coupen/create/index.js"))
);

// MAIN
const Landing = Loadable(lazy(() => import("../pages/Landing.js")));
const AboutUs = Loadable(lazy(() => import("../pages/about/aboutUs.js")));
const MyCart = Loadable(lazy(() => import("../pages/MyCart/Mycart.js")));
const ProductDetails = Loadable(lazy(() => import("../pages/productDetails")));

// AUTHENTICATION
const Login = Loadable(lazy(() => import("../pages/auth/Login")));
const Register = Loadable(lazy(() => import("../pages/auth/Register")));
const ResetPassword = Loadable(
  lazy(() => import("../pages/auth/ResetPassword"))
);
const NewPassword = Loadable(lazy(() => import("../pages/auth/NewPassword")));
const ForgetPassword = Loadable(
  lazy(() => import("../pages/auth/ForgetPassword"))
);
const VerifyCode = Loadable(lazy(() => import("../pages/auth/VerifyCode")));
