import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";

const colorClasses = {
  indigo: "bg-indigo-600",
  red: "bg-red-600",
  blue: "bg-blue-600",
  green: "bg-green-600",
};

const DashboardWidget = ({ title, value, color = "indigo" }) => {
  const backgroundColorClass = colorClasses[color] || colorClasses.indigo;

  return (
    <div
      className={`text-center p-4 ${backgroundColorClass} rounded-lg shadow-lg`}
    >
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-2xl font-bold text-white">
        {value}{" "}
        <FontAwesomeIcon
          icon={faSatelliteDish}
          color="red"
          className="animate-pulse"
        />
      </p>
    </div>
  );
};

export default DashboardWidget;
