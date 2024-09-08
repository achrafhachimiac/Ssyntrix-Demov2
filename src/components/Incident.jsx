import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";

const IncidentTable = () => {
  // Sample data for incidents
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      status: "In progress",
      assignedTo: "John Doe",
      details: "Issue 1",
      severity: "Critical",
      date: "2023-04-15",
    },
    {
      id: 2,
      status: "New",
      assignedTo: "Sarah Adams",
      details: "Issue 2",
      severity: "High",
      date: "2023-05-01",
    },
    {
      id: 3,
      status: "In progress",
      assignedTo: "Lisa Martinez",
      details: "Issue 3",
      severity: "High",
      date: "2023-06-10",
    },
    {
      id: 4,
      status: "New",
      assignedTo: "Michael Rodriguez",
      details: "Issue 4",
      severity: "Medium",
      date: "2023-07-01",
    },
    {
      id: 5,
      status: "In progress",
      assignedTo: "Steve Smith",
      details: "Issue 5",
      severity: "Critical",
      date: "2023-08-21",
    },
    {
      id: 6,
      status: "New",
      assignedTo: "Anna Brown",
      details: "Issue 6",
      severity: "Low",
      date: "2023-09-01",
    },
    {
      id: 7,
      status: "In progress",
      assignedTo: "Emily Johnson",
      details: "Issue 7",
      severity: "Medium",
      date: "2023-04-18",
    },
    {
      id: 8,
      status: "New",
      assignedTo: "Robert King",
      details: "Issue 8",
      severity: "High",
      date: "2023-05-05",
    },
    {
      id: 9,
      status: "In progress",
      assignedTo: "Olivia Thompson",
      details: "Issue 9",
      severity: "Critical",
      date: "2023-05-20",
    },
    {
      id: 10,
      status: "New",
      assignedTo: "William Garcia",
      details: "Issue 10",
      severity: "Low",
      date: "2023-06-05",
    },
    {
      id: 11,
      status: "In progress",
      assignedTo: "Sophia Wilson",
      details: "Issue 11",
      severity: "High",
      date: "2023-06-22",
    },
    {
      id: 12,
      status: "New",
      assignedTo: "Daniel Lewis",
      details: "Issue 12",
      severity: "Critical",
      date: "2023-07-12",
    },
    {
      id: 13,
      status: "In progress",
      assignedTo: "Isabella Clark",
      details: "Issue 13",
      severity: "Medium",
      date: "2023-07-15",
    },
    {
      id: 14,
      status: "New",
      assignedTo: "James Young",
      details: "Issue 14",
      severity: "High",
      date: "2023-08-01",
    },
    {
      id: 15,
      status: "In progress",
      assignedTo: "Evelyn Wright",
      details: "Issue 15",
      severity: "Low",
      date: "2023-08-14",
    },
    {
      id: 16,
      status: "New",
      assignedTo: "Christopher Hall",
      details: "Issue 16",
      severity: "Critical",
      date: "2023-08-20",
    },
    {
      id: 17,
      status: "In progress",
      assignedTo: "Charlotte Turner",
      details: "Issue 17",
      severity: "Medium",
      date: "2023-08-30",
    },
    {
      id: 18,
      status: "New",
      assignedTo: "Benjamin Allen",
      details: "Issue 18",
      severity: "High",
      date: "2023-09-01",
    },
    {
      id: 19,
      status: "In progress",
      assignedTo: "Abigail Scott",
      details: "Issue 19",
      severity: "Critical",
      date: "2023-09-05",
    },
    {
      id: 20,
      status: "New",
      assignedTo: "David Phillips",
      details: "Issue 20",
      severity: "Medium",
      date: "2023-09-10",
    },
    {
      id: 21,
      status: "In progress",
      assignedTo: "Mia Edwards",
      details: "Issue 21",
      severity: "Low",
      date: "2023-09-12",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterSeverity, setFilterSeverity] = useState("");

  // Filter logic based on search, status, and severity
  const filteredIncidents = incidents
    .filter(
      (incident) =>
        incident.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
        incident.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((incident) =>
      filterStatus ? incident.status === filterStatus : true
    )
    .filter((incident) =>
      filterSeverity ? incident.severity === filterSeverity : true
    );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by details or assigned person..."
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:mb-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Status Filter */}
          <select
            className="w-full md:w-1/5 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:mb-0"
            onChange={(e) => setFilterStatus(e.target.value)}
            value={filterStatus}
          >
            <option value="">Filter by Status</option>
            <option value="New">New</option>
            <option value="In progress">In progress</option>
          </select>

          {/* Severity Filter */}
          <select
            className="w-full md:w-1/5 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFilterSeverity(e.target.value)}
            value={filterSeverity}
          >
            <option value="">Filter by Severity</option>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-blue-custom text-white uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Assigned To</th>
                <th className="py-3 px-6 text-left">Details</th>
                <th className="py-3 px-6 text-left">Severity</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {filteredIncidents.map((incident) => (
                <tr
                  key={incident.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-blue-600 font-medium">
                    {incident.status}
                  </td>
                  <td className="py-3 px-6">{incident.assignedTo}</td>
                  <td className="py-3 px-6">{incident.details}</td>
                  <td className="py-3 px-6">
                    <span
                      className={`py-1 px-3 rounded-full text-xs ${
                        incident.severity === "Critical"
                          ? "bg-red-500 text-white"
                          : incident.severity === "High"
                          ? "bg-yellow-500 text-white"
                          : incident.severity === "Medium"
                          ? "bg-gray-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {incident.severity}
                    </span>
                  </td>
                  <td className="py-3 px-6">{incident.date}</td>
                  <td className="py-3 px-6 flex space-x-2">
                    <button className="text-gray-600 text-2xl hover:text-gray-900">
                      <CiEdit />
                    </button>
                    <button className="text-blue-600 text-2xl hover:text-blue-900">
                      <IoDocumentTextOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IncidentTable;
