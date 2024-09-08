import React, { useState } from "react";
import { Link } from "react-router-dom";
import { initialCustomers } from "../lib/fake/customers";

const CustomersTable = () => {
  // Initial data

  const [customers, setCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter and search functionality
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredCustomers = initialCustomers.filter((customer) =>
      Object.values(customer).join(" ").toLowerCase().includes(value)
    );

    setCustomers(filteredCustomers);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Customers</h1>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition">
          Export
        </button>
      </div>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-blue-custom text-white uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">User ID</th>
              <th className="py-3 px-6 text-left">User</th>
              <th className="py-3 px-6 text-left">Email Address</th>
              <th className="py-3 px-6 text-left">User Full Name</th>
              <th className="py-3 px-6 text-left">User Created</th>
              <th className="py-3 px-6 text-left">User Balance</th>
              <th className="py-3 px-6 text-left">User Country</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {customers.length > 0 ? (
              customers.map((customer, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-6">{customer.userId}</td>
                  <td className="py-3 px-6">{customer.username}</td>
                  <td className="py-3 px-6">{customer.email}</td>
                  <td className="py-3 px-6">{customer.fullName}</td>
                  <td className="py-3 px-6">{customer.created}</td>
                  <td className="py-3 px-6">{customer.balance}</td>
                  <td className="py-3 px-6">{customer.country}</td>
                  <td className="py-3 px-6">
                    <Link
                      to={`/customers/${customer.userId}`}
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersTable;
