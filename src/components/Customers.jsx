import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomersTable = () => {
  // Initial data
  const initialCustomers = [
    {
      userId: "q9w8e7r6t5z",
      username: "JSmith",
      email: "jsmith@example.com",
      fullName: "John Smith",
      created: "9/7/20 12:26:47 PM",
      balance: "525.55",
      country: "",
    },
    {
      userId: "eds2fwr1t2z",
      username: "ChrisTom",
      email: "vivodo3565@epeva.com",
      fullName: "Chris Thomas",
      created: "9/16/20 12:07:30 PM",
      balance: "",
      country: "",
    },
    {
      userId: "d9s1f1r9t1z",
      username: "IvanMikha",
      email: "ivan@mail.ru",
      fullName: "Ivan Mikhailov Sergej",
      created: "11/2/15 9:45:17 PM",
      balance: "",
      country: "RU",
    },
    {
      userId: "a8s9d8f7g6h5",
      username: "JaneD",
      email: "janedoe123@example.com",
      fullName: "Jane Doe",
      created: "10/10/21 08:15:22 AM",
      balance: "100.75",
      country: "US",
    },
    {
      userId: "jkl4m5n6o7p8",
      username: "RandyB",
      email: "randy.barker@samplemail.com",
      fullName: "Randy Barker",
      created: "8/14/19 3:14:25 PM",
      balance: "310.40",
      country: "UK",
    },
    {
      userId: "xzv7y6c5b4n3",
      username: "OliviaW",
      email: "olivia.wilson@example.com",
      fullName: "Olivia Wilson",
      created: "12/5/22 9:00:11 AM",
      balance: "",
      country: "CA",
    },
    {
      userId: "m9n8b7v6c5x4",
      username: "LeoB",
      email: "leo.brown@webmail.com",
      fullName: "Leo Brown",
      created: "3/8/20 5:47:22 PM",
      balance: "50.00",
      country: "",
    },
    {
      userId: "q1w2e3r4t5y6",
      username: "AshleyM",
      email: "ashley.martin@mailplace.com",
      fullName: "Ashley Martin",
      created: "4/3/18 10:05:30 AM",
      balance: "245.89",
      country: "",
    },
    {
      userId: "z9x8c7v6b5n4",
      username: "MiaJ",
      email: "mia.jones@domain.com",
      fullName: "Mia Jones",
      created: "7/1/21 12:45:19 PM",
      balance: "",
      country: "AU",
    },
    {
      userId: "b7v6c5x4z3a2",
      username: "LiamT",
      email: "liam.taylor@internet.com",
      fullName: "Liam Taylor",
      created: "2/23/19 6:34:58 AM",
      balance: "780.00",
      country: "",
    },
    {
      userId: "u1i2o3p4l5k6",
      username: "SophiaL",
      email: "sophia.lambert@randommail.com",
      fullName: "Sophia Lambert",
      created: "1/20/20 8:10:30 PM",
      balance: "",
      country: "DE",
    },
    {
      userId: "r3t4y5u6i7o8",
      username: "TomH",
      email: "tom.harris@contact.com",
      fullName: "Tom Harris",
      created: "5/15/21 11:22:33 AM",
      balance: "600.55",
      country: "FR",
    },
    {
      userId: "p2o1i9u8y7t6",
      username: "EllaG",
      email: "ella.garcia@abc.net",
      fullName: "Ella Garcia",
      created: "6/12/19 9:17:44 PM",
      balance: "450.00",
      country: "",
    },
    {
      userId: "m1n2b3v4c5x6",
      username: "NathanS",
      email: "nathan.smith@digital.com",
      fullName: "Nathan Smith",
      created: "10/30/20 1:23:45 PM",
      balance: "",
      country: "IN",
    },
    {
      userId: "w3e4r5t6y7u8",
      username: "GraceF",
      email: "grace.foster@example.org",
      fullName: "Grace Foster",
      created: "3/14/21 7:58:31 AM",
      balance: "120.00",
      country: "ES",
    },
    {
      userId: "k5j4h3g2f1d9",
      username: "LucasW",
      email: "lucas.white@myemail.com",
      fullName: "Lucas White",
      created: "11/17/18 5:27:19 AM",
      balance: "300.00",
      country: "",
    },
    {
      userId: "z6x7c8v9b0n1",
      username: "ChloeK",
      email: "chloe.king@service.com",
      fullName: "Chloe King",
      created: "9/9/19 2:15:55 PM",
      balance: "90.25",
      country: "IT",
    },
    {
      userId: "s4d5f6g7h8j9",
      username: "EthanA",
      email: "ethan.adams@network.net",
      fullName: "Ethan Adams",
      created: "8/21/20 4:05:44 PM",
      balance: "",
      country: "",
    },
    {
      userId: "a7s8d9f0g1h2",
      username: "ZoeM",
      email: "zoe.miller@cloudmail.com",
      fullName: "Zoe Miller",
      created: "2/2/19 10:59:12 AM",
      balance: "230.00",
      country: "JP",
    },
    {
      userId: "q3w4e5r6t7y8",
      username: "HenryL",
      email: "henry.lewis@freemail.com",
      fullName: "Henry Lewis",
      created: "6/27/22 8:45:10 PM",
      balance: "",
      country: "",
    },
  ];

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
