import React, { useState, useEffect } from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";

function DashboardHistory() {
  // Initialize with mock data for demonstration
  const [data, setData] = useState([
    { timestamp: "1:00:05", deviceId: 1, count: 10 },
    { timestamp: "1:00:10", deviceId: 1, count: 15 },
    { timestamp: "1:00:15", deviceId: 1, count: 20 },
    { timestamp: "1:00:20", deviceId: 1, count: 25 },
    { timestamp: "1:00:25", deviceId: 1, count: 30 },
    { timestamp: "1:00:30", deviceId: 1, count: 35 },
    { timestamp: "1:00:35", deviceId: 1, count: 40 },
    { timestamp: "1:00:40", deviceId: 1, count: 45 },
    { timestamp: "1:00:45", deviceId: 1, count: 50 },
    { timestamp: "1:00:50", deviceId: 1, count: 55 },
    { timestamp: "1:00:55", deviceId: 1, count: 60 },
    { timestamp: "1:01:00", deviceId: 1, count: 65 },
  ]);

  // This useEffect would be where you fetch actual data
  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      // Placeholder for actual fetch implementation
    };

    fetchData();

    // Placeholder for setting up an interval to fetch data
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex gap-10 p-12 min-h-screen">
        <Table className="self-center">
          <TableHead>
            <TableRow>
              <TableCell as="th">Timestamp</TableCell>
              <TableCell as="th">Device ID</TableCell>
              <TableCell as="th">Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.timestamp}</TableCell>
                <TableCell>{entry.deviceId}</TableCell>
                <TableCell>{entry.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default DashboardHistory;
