import React, { useState, useEffect } from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Loader,
} from "@aws-amplify/ui-react";
import DashboardWidget from "../components/DashboardWidget";
import "react-datepicker/dist/react-datepicker.css";
import DevicesTable from "../components/DevicesTable";
import { generateClient } from "aws-amplify/api";
import { listNVIDIAJetsons } from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";

const DashboardAnalytics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [countData, setCountData] = useState({});
  const [allDeviceData, setAllDeviceData] = useState([]);
  const [parsedData, setParsedData] = useState([]);
  const [median, setMedian] = useState(0);
  const [average, setAverage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

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
    const client = generateClient();
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
    fetchDevices(); // Fetch devices initially
    return () => subscription.unsubscribe();
  }, []);

  // Add a new useEffect hook to update the  data when countData changes
  useEffect(() => {
    if (countData && countData.device_id === selectedDevice) {
      const updatedData = (prevParsedData) => {
        // Find if the entry already exists
        const index = prevParsedData.findIndex(
          (entry) => entry.device_id === countData.device_id
        );

        // Deep clone prevParsedData to avoid mutating state directly
        const updatedParsedData = JSON.parse(JSON.stringify(prevParsedData));

        if (index !== -1) {
          // Update the existing entry's count
          updatedParsedData[index].count = JSON.parse(countData.data).count?.N;
        } else {
          // Add new entry if it doesn't exist
          updatedParsedData.push({
            formattedTimestamp: new Date(countData.timestamp).toLocaleString(),
            device_id: countData.device_id,
            count: JSON.parse(countData.data).count?.N,
          });
        }

        // Sort again after update to ensure order is maintained
        updatedParsedData.sort(
          (a, b) =>
            new Date(b.formattedTimestamp) - new Date(a.formattedTimestamp)
        );

        return updatedParsedData;
      };
      setParsedData(updatedData);
    }
  }, [countData]);
  // calculating statistics
  const calculateMedian = (numbersArray) => {
    const sortedArray = [...numbersArray].sort((a, b) => a - b);
    const midIndex = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
      // Even number of observations
      return (sortedArray[midIndex - 1] + sortedArray[midIndex]) / 2;
    } else {
      // Odd number of observations
      return sortedArray[midIndex];
    }
  };

  useEffect(() => {
    // Recalculate statistics whenever parsedData changes
    if (parsedData.length > 0) {
      const totalCount = parsedData.reduce(
        (sum, entry) => sum + parseInt(entry.count),
        0
      );
      const averageCount = totalCount / parsedData.length;
      const counts = parsedData.map((entry) => parseInt(entry.count));
      const medianCount = calculateMedian(counts);

      setTotalCount(totalCount);
      setMedian(medianCount);
      setAverage(averageCount.toFixed(2)); // Assuming you want average to be a fixed decimal place value
    } else {
      // Reset statistics if there's no data
      setTotalCount(0);
      setMedian(0);
      setAverage(0);
    }
  }, [parsedData]);

  // changing device
  useEffect(() => {
    if (selectedDevice && allDeviceData.length > 0) {
      const deviceData = allDeviceData.filter(
        (item) => item.device_id === selectedDevice
      );
      const filterAndFormatData = () => {
        const filteredAndSortedData = deviceData
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
    }
  }, [allDeviceData, selectedDevice]);

  return (
    <div className="flex flex-row justify-center gap-10 p-12 min-h-screen">
      <div className="flex-1">
        <div className="flex justify-center gap-8 items-center mb-10">
          {/* Styling for Average */}
          <DashboardWidget title="Average" value={average} color="indigo" />
          <DashboardWidget title="Median" value={median} color="blue" />
          <DashboardWidget
            title="Total Count"
            value={totalCount}
            color="green"
          />
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
      <div className="w-1/4 overflow-auto shadow-lg p-5 bg-white rounded-lg">
        <DevicesTable
          setSelectedDevice={setSelectedDevice}
          selectedDevice={selectedDevice}
        />
      </div>
    </div>
  );
};

export default DashboardAnalytics;
