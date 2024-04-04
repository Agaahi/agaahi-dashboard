import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HomeDashboard from "./pages/HomeDashboard";
import DashboardHistory from "./pages/DashboardHistory";
import ViewerDashboard from "./pages/ViewerDashboard";
import Settings from "./pages/Settings";
import { Amplify } from "aws-amplify";
import "./index.css";
import amplifyconfig from "./aws-exports.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardAnalytics from "./pages/DashboardAnalytics.jsx";
const awsmobile = {
  ...amplifyconfig,
  aws_appsync_graphqlEndpoint:
    "https://s5q3okho75fi7i3fx6atatgdzu.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-w76h6c3alfd5rdecfjvdy6agju",
};
Amplify.configure(awsmobile);
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
