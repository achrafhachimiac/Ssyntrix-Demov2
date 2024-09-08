import React, { useState } from "react";
import { BsHourglass, BsCheck2Circle, BsBell } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { VscSend } from "react-icons/vsc";

const initialAlerts = [
  {
    id: 1,
    name: "CPU Usage Spike",
    service: "Web Server",
    status: "High",
    triggeredAt: "08/09/2023 10:10:00",
    resolved: false,
  },
  {
    id: 2,
    name: "Disk Space Low",
    service: "Database",
    status: "Medium",
    triggeredAt: "07/09/2023 15:25:00",
    resolved: true,
  },
  {
    id: 3,
    name: "Memory Leak Detected",
    service: "API Service",
    status: "High",
    triggeredAt: "08/09/2023 08:20:00",
    resolved: false,
  },
  {
    id: 4,
    name: "Network Latency Spike",
    service: "Web Server",
    status: "Medium",
    triggeredAt: "07/09/2023 18:40:00",
    resolved: false,
  },
  {
    id: 5,
    name: "SSL Certificate Expiring",
    service: "Web Server",
    status: "Low",
    triggeredAt: "06/09/2023 14:05:00",
    resolved: true,
  },
  {
    id: 6,
    name: "Database Connection Timeout",
    service: "Database",
    status: "High",
    triggeredAt: "08/09/2023 09:45:00",
    resolved: false,
  },
  {
    id: 7,
    name: "Unauthorized Access Attempt",
    service: "Authentication Service",
    status: "Critical",
    triggeredAt: "08/09/2023 11:15:00",
    resolved: false,
  },
  {
    id: 8,
    name: "API Rate Limit Exceeded",
    service: "API Service",
    status: "Medium",
    triggeredAt: "08/09/2023 12:30:00",
    resolved: false,
  },
  {
    id: 9,
    name: "Service Downtime Detected",
    service: "Web Server",
    status: "Critical",
    triggeredAt: "08/09/2023 09:00:00",
    resolved: true,
  },
  {
    id: 10,
    name: "Backup Failed",
    service: "Database",
    status: "High",
    triggeredAt: "07/09/2023 20:30:00",
    resolved: false,
  },
  {
    id: 11,
    name: "File Upload Errors",
    service: "File Service",
    status: "Medium",
    triggeredAt: "06/09/2023 16:45:00",
    resolved: true,
  },
  {
    id: 12,
    name: "High Memory Usage",
    service: "API Service",
    status: "High",
    triggeredAt: "08/09/2023 07:50:00",
    resolved: false,
  },
  {
    id: 13,
    name: "Brute Force Attack Detected",
    service: "Authentication Service",
    status: "Critical",
    triggeredAt: "08/09/2023 06:35:00",
    resolved: false,
  },
  {
    id: 14,
    name: "Slow Query Execution",
    service: "Database",
    status: "Low",
    triggeredAt: "07/09/2023 19:05:00",
    resolved: true,
  },
  {
    id: 15,
    name: "Service Health Check Failed",
    service: "Web Server",
    status: "Medium",
    triggeredAt: "08/09/2023 13:45:00",
    resolved: false,
  },
  {
    id: 16,
    name: "Cache Server Overload",
    service: "Cache Service",
    status: "High",
    triggeredAt: "08/09/2023 09:30:00",
    resolved: false,
  },
  {
    id: 17,
    name: "Excessive 404 Errors",
    service: "Web Server",
    status: "Low",
    triggeredAt: "07/09/2023 12:20:00",
    resolved: true,
  },
  {
    id: 18,
    name: "Email Queue Delay",
    service: "Email Service",
    status: "Medium",
    triggeredAt: "07/09/2023 13:50:00",
    resolved: false,
  },
  {
    id: 19,
    name: "DNS Resolution Failure",
    service: "DNS Service",
    status: "Critical",
    triggeredAt: "08/09/2023 14:30:00",
    resolved: false,
  },
  {
    id: 20,
    name: "Server Reboot Required",
    service: "Web Server",
    status: "Low",
    triggeredAt: "06/09/2023 17:10:00",
    resolved: true,
  },
];

const statusColors = {
  High: "text-red-600",
  Medium: "text-yellow-600",
  Low: "text-green-600",
};

const statusIcons = {
  High: <BsBell />,
  Medium: <BsHourglass />,
  Low: <BsCheck2Circle />,
  Resolved: <ImCancelCircle />,
};

const AlertsTable = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredAlerts = alerts.filter((alert) => {
    const matchesSearch = alert.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus ? alert.status === filterStatus : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Alerts</h2>

      <div className="flex flex-col lg:flex-row justify-between mb-6 space-y-4 lg:space-y-0 lg:space-x-4">
        <input
          type="text"
          placeholder="Search alerts..."
          className="w-full lg:w-1/3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearch}
        />

        <select
          className="w-full lg:w-1/4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filterStatus}
          onChange={handleFilter}
        >
          <option value="">Filter by Status</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-sm caption-bottom">
          <thead>
            <tr className="bg-blue-custom text-white uppercase text-sm leading-normal">
              <th className="text-center px-3 py-2">
                <input
                  className="allSelector"
                  id="allSelector"
                  type="checkbox"
                  onClick={() => {}}
                  style={{
                    transform: "translateY(10%)",
                    verticalAlign: "top",
                  }}
                />
              </th>
              <th className="text-left px-3 py-2">Alert</th>
              <th className="text-left px-3 py-2">Service</th>
              <th className="text-center px-3 py-2">Status</th>
              <th className="text-center px-3 py-2">Triggered At</th>
              <th className="text-center px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {filteredAlerts.length > 0 ? (
              filteredAlerts.map((alert, rowIndex) => (
                <tr
                  key={alert.id}
                  className={`${
                    rowIndex % 2 === 0 ? "bg-white" : "bg-gray-200"
                  } cursor-pointer`}
                >
                  <td className="text-center px-3 py-2">
                    <input
                      className="Transaction_check"
                      type="checkbox"
                      style={{ verticalAlign: "top" }}
                    />
                  </td>
                  <td className="text-left px-3 py-2">{alert.name}</td>
                  <td className="text-left px-3 py-2">{alert.service}</td>
                  <td
                    className={`text-center px-3 py-2 ${
                      statusColors[alert.status]
                    }`}
                  >
                    <div className="flex justify-center items-center">
                      {statusIcons[alert.status]} {alert.status}
                    </div>
                  </td>
                  <td className="text-center px-3 py-2">{alert.triggeredAt}</td>
                  <td className="text-center px-3 py-2">
                    <button
                      className={`text-white font-bold py-1 px-4 rounded-lg ${
                        alert.resolved
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-500 hover:bg-blue-600"
                      }`}
                      disabled={alert.resolved}
                    >
                      {alert.resolved ? "Resolved" : "Create Case"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 px-3 py-2">
                  No alerts found
                </td>
              </tr>
            )}
          </tbody>
          <caption className="mt-4">
            <div className="flex justify-start gap-6 p-2">
              <span className="flex items-center gap-2">
                <BsHourglass />
                <p className="text-sm text-gray-600">Medium</p>
              </span>
              <span className="flex items-center gap-2">
                <BsCheck2Circle />
                <p className="text-sm text-gray-600">Low</p>
              </span>
              <span className="flex items-center gap-2">
                <ImCancelCircle />
                <p className="text-sm text-gray-600">Cancelled</p>
              </span>
              <span className="flex items-center gap-2">
                <BsBell />
                <p className="text-sm text-gray-600">High</p>
              </span>
              <span className="flex items-center gap-2">
                <VscSend />
                <p className="text-sm text-gray-600">Additional checks sent</p>
              </span>
            </div>
          </caption>
        </table>
      </div>
    </div>
  );
};

export default AlertsTable;
