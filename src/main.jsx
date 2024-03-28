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
  aws_project_region: "us-east-1",
  aws_cognito_identity_pool_id:
    "us-east-1:9afdc4da-fe97-4d75-8448-019306019291",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_uZ6HiXxAl",
  aws_user_pools_web_client_id: "319ag4ufmk4fd324kgtm5vpl2k",
  oauth: {},
  aws_cognito_username_attributes: ["EMAIL"],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ["EMAIL"],
  aws_cognito_mfa_configuration: "OFF",
  aws_cognito_mfa_types: ["SMS"],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ["EMAIL"],
  aws_appsync_graphqlEndpoint:
    "https://s5q3okho75fi7i3fx6atatgdzu.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-6j22xljzsbeufihqp63gkp53f4",
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
