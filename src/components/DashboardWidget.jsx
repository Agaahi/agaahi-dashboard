import React from "react";
const DashboardWidget = ({ display }) => {
  return (
    <>
      <div className="flex-auto p-5 max-w-sm rounded overflow-auto shadow-lg bg-neutral-200 flex flex-col gap-10 min-h-[200px]">
        {display}
      </div>
    </>
  );
};

export default DashboardWidget;
