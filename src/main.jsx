import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "./HomeLayout/HomeLayout/HomeLayout.jsx";

import AuthProvider from "./Context/AuthProvider.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Home from "./Pages/Home.jsx";
import ShareGardenTipPage from "./Pages/ShareGardenTipPage.jsx";
import NotFound from "./Pages/NotFound.jsx";
import BrowseTips from "./Pages/BrowseTips.jsx";
import TipDetails from "./Pages/TipDetails.jsx";
import PrivateRoutes from "./Context/PrivateRoutes.jsx";
import MyTips from "./Pages/MyTips.jsx";
import MyDashboard from "./Pages/Dashboard.jsx";
import Loading from "./Components/Loading.jsx";
import UpdateTip from "./Pages/UpdateTip.jsx";
import ExploreGardeners from "./Pages/ExploreGardeners.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Dashboard from "./DashboadLayout/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "signIn",
        Component: SignIn,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
      {
        path: "aboutUs",
        Component: AboutUs,
      },
      {
        path: "contactUs",
        Component: ContactUs,
      },
      {
        path: "exploreGardeners",
        Component: ExploreGardeners,
      },
      {
        path: "browseTips",
        Component: BrowseTips,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "browseTips/:id",
        loader: ({ params }) =>
          fetch(`https://a10-server-sandy.vercel.app/${params.id}`),
        element: (
          <PrivateRoutes>
            <TipDetails />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/updateTip/:id",
        loader: ({ params }) =>
          fetch(`https://a10-server-sandy.vercel.app/updateTip/${params.id}`),
        Component: UpdateTip,
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "dashboard",
    Component: Dashboard,
    children: [
      {
        path: "/dashboard",
        Component: MyDashboard,
      },
      {
        path: "/dashboard/myTips",
        element: (
          <PrivateRoutes>
            <MyTips />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/dashboard/shareGardenTipPage",
        element: (
          <PrivateRoutes>
            <ShareGardenTipPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/browseTips",
        Component: BrowseTips,
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
