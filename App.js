import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
/**
 *
 * Header
 *  --logo
 *  --nav items
 * Body
 * -- restaurant container
 * --restaurant card
 *  --logo
 * -res name,cusine,starts,delivery time
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
  path: "/",
  element: <AppLayout />,
  children: [
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path:"/restaurant/:resId",
      element:<RestaurantMenu/>,
    },
  ],
  errorElement:<Error/>
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
