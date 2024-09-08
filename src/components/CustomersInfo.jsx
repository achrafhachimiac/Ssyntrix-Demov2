import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { customerData } from "../lib/fake/customers";

const CustomerInfo = () => {
  const { customerId } = useParams();
  const customer = customerData[customerId];
  const navigate = useNavigate();

  if (!customer) {
    return <div className="container mx-auto p-8">Customer not found</div>;
  }

  const handleDelete = () => {
    // Handle delete logic
    alert("Customer deleted");
    navigate("/");
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Customer Details
        </h2>
        <button
          onClick={() => navigate("/customers")}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all rounded-lg shadow"
        >
          Back to Customers
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-4">{customer.fullName}</h3>
        <div className="mb-4">
          <strong>Email:</strong> {customer.email}
        </div>
        <div className="mb-4">
          <strong>Balance:</strong> ${customer.balance.toFixed(2)}
        </div>
        <div className="mb-4">
          <strong>Country:</strong> {customer.country}
        </div>
        <div className="mb-4">
          <strong>Account Created:</strong> {customer.created}
        </div>

        <div className="mb-6">
          <strong>Transactions:</strong>
          <ul className="list-disc list-inside">
            {customer.transactions.length > 0 ? (
              customer.transactions.map((transaction, index) => (
                <li key={index}>{transaction}</li>
              ))
            ) : (
              <li>No transactions found</li>
            )}
          </ul>
        </div>

        <div className="flex space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-all rounded-lg shadow">
            Edit Customer
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-all rounded-lg shadow"
          >
            Delete Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
