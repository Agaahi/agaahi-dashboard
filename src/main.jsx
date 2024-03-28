import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HomeDashboard from "./pages/HomeDashboard";
import DashboardHistory from "./pages/DashboardHistory";
import ViewerDashboard from "./pages/ViewerDashboard";
import Settings from "./pages/Settings";
import { Amplify } from "aws-amplify";
import "./index.css";
import amplifyconfig from "./amplifyconfiguration.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardAnalytics from "./pages/DashboardAnalytics.jsx";
const router = createBrowserRouter([
  {
    path: "auth", // Use a base path for AppLayout
    element: <App />,
    children: [
      { path: "dashboard-home", element: <HomeDashboard /> }, // Nested route
      { path: "dashboard-history", element: <DashboardHistory /> }, // Nested route
      { path: "dashboard-analytics", element: <DashboardAnalytics /> }, // Nested route
      { path: "settings", element: <Settings /> }, // Nested route
      // Add other nested routes as needed
    ],
  },
  {
    path: "/", // Use a base path for AppLayout
    element: <ViewerDashboard />,
    children: [
      { path: "home", element: <HomeDashboard /> }, // Nested route
      { path: "history", element: <DashboardHistory /> }, // Nested route
    ],
  },
]);

Amplify.configure(amplifyconfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
