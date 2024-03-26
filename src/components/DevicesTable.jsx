import React, { useState } from "react";
import { Card } from "@aws-amplify/ui-react";

const DevicesTable = ({ devices, onDeviceSelect, selectedDevice }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredDevices = devices.filter((device) =>
    device.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (deviceId) => {
    onDeviceSelect(deviceId);
  };

  return (
    <div className="p-5 min-h-full rounded overflow-auto shadow-lg bg-neutral-200 flex flex-col gap-2">
      <input
        type="text"
        placeholder="Search devices..."
        value={searchQuery}
        onChange={handleSearch}
      />
      {filteredDevices.map((device) => (
        <Card
          key={device.id}
          className={`rounded hover:bg-green-600 ${
            selectedDevice === device.id ? "bg-green-600" : ""
          }`}
          onClick={() => handleCardClick(device.id)}
        >
          <h3>Device ID: {device.id}</h3>
        </Card>
      ))}
    </div>
  );
};

export default DevicesTable;
