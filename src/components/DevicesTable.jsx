import React, { useState } from "react";
import { Card, Loader } from "@aws-amplify/ui-react";

const DevicesTable = ({ devices, onDeviceSelect, selectedDevice, loading }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredDevices = devices.filter((device) =>
    device.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (deviceId) => {
    onDeviceSelect(deviceId);
  };

  return (
    <div className="p-5 min-h-full rounded overflow-auto shadow-lg bg-neutral-200 flex flex-col gap-2">
      {loading ? (
        <Loader size="large" className="mx-auto" variation="linear" />
      ) : (
        <>
          <input
            type="text"
            placeholder="Search devices..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {filteredDevices.map((device) => (
            <Card
              key={device}
              className={`rounded hover:bg-green-600 ${
                selectedDevice === device ? "bg-green-600" : ""
              }`}
              onClick={() => handleCardClick(device)}
            >
              <h3>Device ID: {device}</h3>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default DevicesTable;
