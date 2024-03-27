import React, { useState } from "react";
import "@aws-amplify/ui-react/styles.css";

import Navbar from "../components/Navbar";
import HomeDashboard from "./HomeDashboard";
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
          <HomeDashboard />
        </div>
      </div>
    </>
  );
};

export default ViewerDashboard;
