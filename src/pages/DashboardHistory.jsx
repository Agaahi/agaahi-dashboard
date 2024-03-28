import React, { useState, useEffect } from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Loader,
} from "@aws-amplify/ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DevicesTable from "../components/DevicesTable";
import { generateClient } from "aws-amplify/api";
import { listNVIDIAJetsons } from "../graphql/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { Amplify } from "aws-amplify";
import amplifyconfig from "../amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

const DashboardHistory = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  const [allDeviceData, setAllDeviceData] = useState({});
  const [parsedData, setParsedData] = useState({});
  const [dateError, setDateError] = useState("");

  const fetchDevices = async () => {
    setIsLoading(true); // Start loading
    const client = generateClient();
    try {
      const deviceData = await client.graphql({ query: listNVIDIAJetsons });
      setAllDeviceData(deviceData.data.listNVIDIAJetsons.items);
    } catch (error) {
      console.error("Error fetching devices:", error);
    } finally {
      setIsLoading(false); // End loading regardless of outcome
    }
  };

  useEffect(() => {
    fetchDevices(); // Fetch devices initially
  }, []);

  useEffect(() => {
    const filterAndFormatData = () => {
      const filteredAndSortedData = allDeviceData
        .filter((device) => {
          const deviceTimestamp = new Date(device.timestamp);
          return deviceTimestamp >= startDate && deviceTimestamp <= endDate;
        })
        .map((device) => {
          return {
            formattedTimestamp: new Date(device.timestamp).toLocaleString(),
            device_id: device.device_id,
            count: JSON.parse(device.data).count?.N,
          };
        })
        .sort(
          (a, b) =>
            new Date(b.formattedTimestamp) - new Date(a.formattedTimestamp)
        );

      setParsedData(filteredAndSortedData);
    };

    if (allDeviceData.length > 0) {
      filterAndFormatData();
    }
  }, [allDeviceData, startDate, endDate]);

  const handleStartDateChange = (date) => {
    if (date > endDate) {
      setDateError("Start date cannot be after end date.");
    } else {
      setStartDate(date);
      setDateError(""); // Clear any existing error
    }
  };

  const handleEndDateChange = (date) => {
    if (date < startDate) {
      setDateError("End date cannot be before start date.");
    } else {
      setEndDate(date);
      setDateError(""); // Clear any existing error
    }
  };

  return (
    <div className="flex flex-row justify-center gap-10 p-12 min-h-screen">
      <div className="flex-1">
        <div className="flex justify-center gap-3 items-center mb-10">
          <div className="flex flex-col space-y-5">
            {/* Start Date Picker */}
            <div className="text-center">
              <h4 className="font-bold">Start Date</h4>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                className="form-input p-2 rounded border border-gray-300"
              />
            </div>
            {/* End Date Picker */}
            <div className="text-center">
              <h4 className="font-bold">End Date</h4>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                className="form-input p-2 rounded border border-gray-300"
              />
            </div>
            {dateError && <div className="text-red-500">{dateError}</div>}
          </div>
          <button
            onClick={fetchDevices} // Refresh data on click
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            <FontAwesomeIcon icon={faArrowsRotate} />
          </button>
        </div>
        <div className="overflow-auto h-4/6 bg-white rounded-lg">
          {isLoading ? (
            <Loader size="large" className="mx-auto" variation="linear" />
          ) : (
            <Table className="mx-auto w-full">
              <TableHead>
                <TableRow>
                  <TableCell as="th">Timestamp</TableCell>
                  <TableCell as="th">Device ID</TableCell>
                  <TableCell as="th">Count</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {parsedData.length > 0 ? (
                  parsedData.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell>{entry.formattedTimestamp}</TableCell>
                      <TableCell>{entry.device_id}</TableCell>
                      <TableCell>{entry.count}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan="3" className="text-center">
                      No data!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
      {/* <div className="w-1/4 overflow-auto shadow-lg p-5 bg-white rounded-lg">
        <DevicesTable
          setSelectedDevice={setSelectedDevice}
          selectedDevice={selectedDevice}
        />
      </div> */}
    </div>
  );
};

export default DashboardHistory;
