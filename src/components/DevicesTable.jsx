import React, { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { listNVIDIAJetsons } from "../graphql/queries";
import { Card, Loader } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import amplifyconfig from "../amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

const DevicesTable = ({ setSelectedDevice, selectedDevice }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deviceIDs, setDevicesIDs] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredDevices = deviceIDs.filter((device) =>
    device.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (deviceId) => {
    setSelectedDevice(deviceId);
  };

  useEffect(() => {
    const client = generateClient();
    // Fetch devices
    const fetchDevices = async () => {
      try {
        const deviceData = await client.graphql({ query: listNVIDIAJetsons });
        console.log("Devices:", deviceData.data.listNVIDIAJetsons.items);
        setDevicesIDs([
          ...new Set(
            deviceData.data.listNVIDIAJetsons.items.map(
              (item) => item.device_id
            )
          ),
        ]);
        const initialCount = JSON.parse(
          deviceData.data.listNVIDIAJetsons.items[0]["data"]
        );
        setSelectedDevice(deviceData.data.listNVIDIAJetsons.items[0].device_id);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };
    fetchDevices();
  }, []);

  return (
    <div className="p-5 min-h-full rounded overflow-auto shadow-lg bg-neutral-200 flex flex-col gap-2">
      {isLoading ? (
        <Loader size="large" className="mx-auto" variation="linear" />
      ) : (
        <>
          <input
            type="text"
            placeholder="Search devices..."
            value={searchQuery}
            onChange={handleSearch}
            className=" p-2 rounded border border-gray-300"
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
