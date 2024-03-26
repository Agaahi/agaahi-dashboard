import React, { useState } from "react";
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
import { faker } from "@faker-js/faker";

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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "1:00:05",
  "1:00:10",
  "1:00:15",
  "1:00:20",
  "1:00:25",
  "1:00:30",
  "1:00:35",
  "1:00:40",
  "1:00:45",
  "1:00:50",
  "1:00:55",
  "1:01:00",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Total Count Every 5 Seconds",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const HomeDashboard = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);

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
                <h1 className="text-5xl font-sans mr-2">8</h1>{" "}
                <FontAwesomeIcon
                  icon={faSatelliteDish}
                  color="red"
                  size="xl"
                  className="animate-pulse"
                />
              </div>
            </>
          }
        />
      </div>
      <div className="col-span-3 h-full">
        <div className="grid grid-cols-2 gap-5 p-5 h-full">
          <div className="col-span-1">
            <APIProvider apiKey="AIzaSyBPUE5mwbImPmxxKyuoMpuEgFtynmSzl2U">
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
                devices={[
                  { id: 1, name: "Device 1", description: "Description 1" },
                  { id: 2, name: "Device 2", description: "Description 1" },
                  { id: 3, name: "Device 3", description: "Description 1" },
                  { id: 4, name: "Device 4", description: "Description 1" },
                  { id: 5, name: "Device 4", description: "Description 1" },
                  { id: 6, name: "Device 4", description: "Description 1" },
                  { id: 7, name: "Device 4", description: "Description 1" },
                  { id: 8, name: "Device 4", description: "Description 1" },
                ]}
                onDeviceSelect={setSelectedDevice}
                selectedDevice={selectedDevice}
              />
            </div>
            <div className="flex-1">
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
