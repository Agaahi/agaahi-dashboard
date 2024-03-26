import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Amplify } from "aws-amplify";
import "./index.css";
import amplifyconfig from "./amplifyconfiguration.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/dashboard-home",
    element: <App />,
  },
  {
    path: "/dashboard-analytics",
  },
  {
    path: "/dashboard-map",
  },
  {
    path: "/settings",
  },
]);
Amplify.configure(amplifyconfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
