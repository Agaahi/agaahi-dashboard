import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";

import { generateClient } from "aws-amplify/api";
import { listNVIDIAJetsons } from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import { Loader } from "@aws-amplify/ui-react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

import DashboardWidget from "../components/DashboardWidget";
import DevicesTable from "../components/DevicesTable";

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "Time",
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "Count",
      },
      suggestedMin: 0, // Adjust based on your data
      suggestedMax: 15, // Adjust based on your data
    },
  },
};

function convertTimestampToHHMMSS(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

const HomeDashboard = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [deviceIDs, setDevicesIDs] = useState([]);
  const [allDeviceData, setAllDeviceData] = useState({});
  const [countData, setCountData] = useState({});
  const [count, setCount] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const client = generateClient();
    // Fetch devices
    const fetchDevices = async () => {
      try {
        const deviceData = await client.graphql({ query: listNVIDIAJetsons });
        console.log("Devices:", deviceData.data.listNVIDIAJetsons.items);
        setAllDeviceData(deviceData.data.listNVIDIAJetsons.items);
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
        setCount({
          count: initialCount["count"]["N"],
          timestamp: deviceData.data.listNVIDIAJetsons.items[0].timestamp,
        });
        setSelectedDevice(deviceData.data.listNVIDIAJetsons.items[0].device_id);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    // Create subscription
    const subscription = client
      .graphql({
        query: subscriptions.onCreateNVIDIAJetson,
      })
      .subscribe({
        next: (response) => {
          const { data } = response;
          setAllDeviceData((prevAllDeviceData) => {
            const updatedAllDeviceData = [
              ...prevAllDeviceData,
              data.onCreateNVIDIAJetson,
            ];
            return updatedAllDeviceData;
          });
          setCountData(data.onCreateNVIDIAJetson);
        },
        error: (error) => console.warn("Subscription error:", error),
      });

    // Fetch devices initially and set up subscription
    fetchDevices();

    // Cleanup subscription on component unmount
    return () => subscription.unsubscribe();
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    // Check if countData is not empty and matches the selected device
    if (countData && countData.device_id === selectedDevice) {
      // Assuming countData.data is a JSON string that needs parsing
      const parsedCount = JSON.parse(countData.data); // Ensure countData["data"] exists and is correct
      const newCount = parsedCount.count?.N; // Safely access "N" in case it doesn't exist

      if (newCount !== undefined) {
        setCount({
          count: newCount,
          timestamp: countData.timestamp,
        });

        setGraphData((prevGraphData) => {
          // Clone the previous graph data structure
          const updatedGraphData = { ...prevGraphData };

          // Push the new count onto the existing data array for the first dataset
          updatedGraphData.datasets[0].data.push(newCount);
          const newLabel = convertTimestampToHHMMSS(countData.timestamp);
          updatedGraphData.labels.push(newLabel);

          if (updatedGraphData.datasets[0].data.length > 10) {
            updatedGraphData.datasets[0].data.shift();
            updatedGraphData.labels.shift();
          }

          return updatedGraphData;
        });
      }
    }
  }, [countData]);

  useEffect(() => {
    if (selectedDevice && allDeviceData.length > 0) {
      const deviceData = allDeviceData
        .filter((item) => item.device_id === selectedDevice)
        // Sort by timestamp in descending order to get the most recent entry first
        .sort((a, b) => b.timestamp - a.timestamp);

      // Ensure deviceData is not empty before proceeding
      if (deviceData.length > 0) {
        const mostRecentData = deviceData[0]; // The most recent entry
        console.log("Most recent device data is: ", mostRecentData);

        // Parse the "data" field to extract the count
        const parsedData = JSON.parse(mostRecentData["data"]);
        const countData = parsedData["count"]["N"];
        const timestamp = mostRecentData.timestamp;

        // Update count state with the most recent count
        setCount({ count: countData || "0", timestamp });

        // Generate labels and counts for graph
        const labels = deviceData
          .slice(0, 10)
          .map((device) => {
            const date = new Date(device.timestamp);
            const formattedTime = `${date
              .getHours()
              .toString()
              .padStart(2, "0")}:${date
              .getMinutes()
              .toString()
              .padStart(2, "0")}:${date
              .getSeconds()
              .toString()
              .padStart(2, "0")}`;
            return formattedTime;
          })
          .reverse();

        const counts = deviceData
          .slice(0, 10)
          .map((device) => JSON.parse(device.data).count.N)
          .reverse();

        // Update graph data with labels and corresponding counts
        setGraphData({
          labels,
          datasets: [
            {
              fill: true,
              label: "Count per timestamp",
              data: counts,
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        });
      } else {
        console.log("No data for selected device");
      }
    }
  }, [selectedDevice, allDeviceData]);

  return (
    <div className="grid grid-cols-3 grid-rows-[min-content,1fr] gap-10 p-12 min-h-screen">
      <div className="col-span-3 flex flex-row justify-around max-h-[500px] overflow-hidden">
        <DashboardWidget
          display={
            <>
              <h1 className="text-3xl text-center font-sans">
                Real Time Count
              </h1>
              <div className="flex justify-center items-center">
                {isLoading ? (
                  <Loader size="large" className="mx-auto" />
                ) : (
                  <>
                    <h1 className="text-5xl font-sans mr-2">
                      {count["count"]}
                    </h1>
                    <FontAwesomeIcon
                      icon={faSatelliteDish}
                      color="red"
                      size="xl"
                      className="animate-pulse"
                    />
                  </>
                )}
              </div>
            </>
          }
        />
      </div>
      <div className="col-span-3 h-full">
        <div className="grid grid-cols-2 gap-5 p-5 h-full">
          <div className="col-span-1">
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <Map zoom={12} center={{ lat: 51.05011, lng: -114.08529 }}>
                <Marker position={{ lat: 51.05011, lng: -114.08529 }} />
                <Marker
                  position={{ lat: 51.05011 + 0.005, lng: -114.08529 + 0.005 }}
                />
                <Marker
                  position={{ lat: 51.05011 - 0.01, lng: -114.08529 - 0.01 }}
                />
                <Marker
                  position={{ lat: 51.05011 + 0.015, lng: -114.08529 + 0.015 }}
                />
                <Marker
                  position={{ lat: 51.05011 - 0.02, lng: -114.08529 - 0.002 }}
                />
                <Marker
                  position={{ lat: 51.05011 + 0.025, lng: -114.08529 + 0.025 }}
                />
                <Marker
                  position={{ lat: 51.05011 - 0.025, lng: -114.08529 - 0.03 }}
                />
                <Marker
                  position={{ lat: 51.05011 + 0.035, lng: -114.08529 + 0.01 }}
                />
                <Marker
                  position={{ lat: 51.05011 - 0.04, lng: -114.08529 - 0.02 }}
                />
              </Map>
            </APIProvider>
          </div>
          <div className="col-span-1 flex flex-col h-full ">
            <div className="flex-1 overflow-auto max-h-60">
              <DevicesTable
                devices={deviceIDs}
                onDeviceSelect={setSelectedDevice}
                selectedDevice={selectedDevice}
                loading={isLoading}
              />
            </div>
            <div className="flex-1">
              {graphData.datasets?.[0]?.data?.length > 0 ? (
                <Line options={options} data={graphData} />
              ) : (
                <Loader size="large" className="mx-auto" variation="linear" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
