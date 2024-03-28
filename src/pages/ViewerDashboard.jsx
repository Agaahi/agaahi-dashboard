import React, { useState } from "react";
import "@aws-amplify/ui-react/styles.css";

import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const ViewerDashboard = () => {
  const [currentPage, setCurrentPage] = useState("HomeDashboard");
  const navigateToPage = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <>
      <div className="grid grid-cols-[auto,1fr] grid-rows-1 h-screen">
        <div className="w-60">
          <Navbar navigate={navigateToPage} />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ViewerDashboard;
