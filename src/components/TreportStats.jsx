import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Doughnut, Radar } from "react-chartjs-2";
import { BsShieldLock, BsGraphUp, BsExclamationTriangle } from "react-icons/bs";
import { IoIosWarning } from "react-icons/io";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

export default function ReportStats() {
  const attacksData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Detected Attacks",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const threatsData = {
    labels: ["Phishing", "Malware", "DDoS", "SQL Injection", "Ransomware"],
    datasets: [
      {
        label: "Detected Threats",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const attackDistributionData = {
    labels: ["Phishing", "Malware", "DDoS", "SQL Injection"],
    datasets: [
      {
        label: "Attack Distribution",
        data: [300, 50, 100, 50],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const vulnerabilitiesData = {
    labels: ["Web Apps", "Red Interna", "Usuarios", "Hardware", "Software"],
    datasets: [
      {
        label: "Vulnerabilities",
        data: [2, 3, 5, 1, 4],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center">
          Report & Stats <BsShieldLock className="ml-2" />
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <BsGraphUp className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">
            Detected Attacks
          </h3>
          <p className="text-2xl font-bold text-gray-800">1050</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <IoIosWarning className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">
            Blocked Threats
          </h3>
          <p className="text-2xl font-bold text-gray-800">980</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <BsExclamationTriangle className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">Current Risks</h3>
          <p className="text-2xl font-bold text-gray-800">35</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Detected Attacks Over Time
          </h2>
          <Line data={attacksData} />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Types of Detected Threats
          </h2>
          <Bar data={threatsData} />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Attack Distribution
          </h2>
          <Doughnut data={attackDistributionData} />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Vulnerabilities in Critical Areas
          </h2>
          <Radar data={vulnerabilitiesData} />
        </div>
      </div>
    </div>
  );
}
