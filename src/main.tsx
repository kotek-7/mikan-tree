import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import InstancesPage from "./components/pages/InstancesPage";
import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InstancesPage />
  }
])
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
