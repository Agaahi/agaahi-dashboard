import React, { useState } from "react";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
const App = ({ signOut, user }) => {
  const [currentPage, setCurrentPage] = useState("HomeDashboard");
  const navigateToPage = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <>
      <div className="grid grid-cols-[auto,1fr] grid-rows-1 h-screen">
        <div className="w-60">
          <Navbar signOut={signOut} navigate={navigateToPage} user={user} />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default withAuthenticator(App);
