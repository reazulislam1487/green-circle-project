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
import Loading from "./Components/Loading.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        // loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      // { path: "/addCoffee", Component: AddCoffee },
      // { path: "/updateCoffee", Component: UpdateCoffee },
      // {
      //   path: "/coffee/:id",
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:3000/coffees/${params.id}`),
      //   Component: CoffeeDetails,
      //   hydrateFallbackElement: <h1>Loading...</h1>,
      // },
      // {
      //   path: "/updateCoffee/:id",
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:3000/coffees/${params.id}`),
      //   Component: UpdateCoffee,
      // },
      {
        path: "signIn",
        Component: SignIn,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
      {
        path: "shareGardenTipPage",
        Component: ShareGardenTipPage,
      },
      {
        path: "browseTips",
        Component: BrowseTips,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "myTips",
        Component: MyTips,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "browseTips/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/browseTips/${params.id}`),
        element: (
          <PrivateRoutes>
            <TipDetails />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },

      // {
      //   path: "/users/:id",
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:3000/users/${params.id}`),
      //   Component: UserDetails,
      //   hydrateFallbackElement: <h1>Loading...</h1>,
      // },
      // {
      //   path: "/update/:id",
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:3000/users/${params.id}`),
      //   Component: UpdateUser,
      //   hydrateFallbackElement: <h1>Loading...</h1>,
      // },
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
