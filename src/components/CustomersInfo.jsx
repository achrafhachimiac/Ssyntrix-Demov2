import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Dummy Data (you can replace this with API calls)
const customerData = {
  q9w8e7r6t5z: {
    fullName: "John Smith",
    email: "jsmith@example.com",
    balance: 525.55,
    country: "US",
    created: "9/7/20",
    transactions: ["Transaction 1", "Transaction 2"],
  },
  eds2fwr1t2z: {
    fullName: "Chris Thomas",
    email: "vivodo3565@epeva.com",
    balance: 0,
    country: "US",
    created: "9/16/20",
    transactions: [],
  },
  d9s1f1r9t1z: {
    fullName: "Ivan Mikhailov Sergej",
    email: "ivan@mail.ru",
    balance: 0,
    country: "RU",
    created: "11/2/15",
    transactions: [],
  },
  a8s9d8f7g6h5: {
    fullName: "Jane Doe",
    email: "janedoe123@example.com",
    balance: 100.75,
    country: "US",
    created: "10/10/21",
    transactions: ["Transaction 1"],
  },
  jkl4m5n6o7p8: {
    fullName: "Randy Barker",
    email: "randy.barker@samplemail.com",
    balance: 310.4,
    country: "UK",
    created: "8/14/19",
    transactions: ["Transaction 1", "Transaction 2"],
  },
  xzv7y6c5b4n3: {
    fullName: "Olivia Wilson",
    email: "olivia.wilson@example.com",
    balance: 0,
    country: "CA",
    created: "12/5/22",
    transactions: [],
  },
  m9n8b7v6c5x4: {
    fullName: "Leo Brown",
    email: "leo.brown@webmail.com",
    balance: 50.0,
    country: "",
    created: "3/8/20",
    transactions: ["Transaction 1"],
  },
  q1w2e3r4t5y6: {
    fullName: "Ashley Martin",
    email: "ashley.martin@mailplace.com",
    balance: 245.89,
    country: "",
    created: "4/3/18",
    transactions: [],
  },
  z9x8c7v6b5n4: {
    fullName: "Mia Jones",
    email: "mia.jones@domain.com",
    balance: 0,
    country: "AU",
    created: "7/1/21",
    transactions: ["Transaction 1", "Transaction 2"],
  },
  b7v6c5x4z3a2: {
    fullName: "Liam Taylor",
    email: "liam.taylor@internet.com",
    balance: 780.0,
    country: "",
    created: "2/23/19",
    transactions: [],
  },
  u1i2o3p4l5k6: {
    fullName: "Sophia Lambert",
    email: "sophia.lambert@randommail.com",
    balance: 0,
    country: "DE",
    created: "1/20/20",
    transactions: [],
  },
  r3t4y5u6i7o8: {
    fullName: "Tom Harris",
    email: "tom.harris@contact.com",
    balance: 600.55,
    country: "FR",
    created: "5/15/21",
    transactions: ["Transaction 1"],
  },
  p2o1i9u8y7t6: {
    fullName: "Ella Garcia",
    email: "ella.garcia@abc.net",
    balance: 450.0,
    country: "",
    created: "6/12/19",
    transactions: [],
  },
  m1n2b3v4c5x6: {
    fullName: "Nathan Smith",
    email: "nathan.smith@digital.com",
    balance: 0,
    country: "IN",
    created: "10/30/20",
    transactions: [],
  },
  w3e4r5t6y7u8: {
    fullName: "Grace Foster",
    email: "grace.foster@example.org",
    balance: 120.0,
    country: "ES",
    created: "3/14/21",
    transactions: ["Transaction 1", "Transaction 2"],
  },
  k5j4h3g2f1d9: {
    fullName: "Lucas White",
    email: "lucas.white@myemail.com",
    balance: 300.0,
    country: "",
    created: "11/17/18",
    transactions: [],
  },
  z6x7c8v9b0n1: {
    fullName: "Chloe King",
    email: "chloe.king@service.com",
    balance: 90.25,
    country: "IT",
    created: "9/9/19",
    transactions: [],
  },
  s4d5f6g7h8j9: {
    fullName: "Ethan Adams",
    email: "ethan.adams@network.net",
    balance: 0,
    country: "",
    created: "8/21/20",
    transactions: ["Transaction 1"],
  },
  a7s8d9f0g1h2: {
    fullName: "Zoe Miller",
    email: "zoe.miller@cloudmail.com",
    balance: 230.0,
    country: "JP",
    created: "2/2/19",
    transactions: [],
  },
  q3w4e5r6t7y8: {
    fullName: "Henry Lewis",
    email: "henry.lewis@freemail.com",
    balance: 0,
    country: "",
    created: "6/27/22",
    transactions: ["Transaction 1", "Transaction 2"],
  },
};

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
