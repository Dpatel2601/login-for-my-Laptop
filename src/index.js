import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet,  } from "react-router-dom";
import Home from "./router/Home";
import Navbar from "./Nav-bar/Navbar";
import Signup from "./router/Signup";
import Login from "./router/Login";
import "./index.css";


const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Signup",
        element: <Signup />,
      },
      {
        path: "Login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);