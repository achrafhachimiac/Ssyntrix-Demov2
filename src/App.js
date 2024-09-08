import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./components/NotFound";
import Profile from "./components/Dashboard.jsx";
import SubscriptionHistory from "./components/SubscriptionHistory.jsx";
import Transaction from "./components/Transaction";
import UserAccess from "./components/UserAccess";
import Trustscore from "./components/Trustscore";
import TransactionInfo from "./components/transaction/TansactionInfo";
import TransactionStats from "./components/TrasactionStats";
import TreportStats from "./components/TreportStats";
import Cases from "./components/Cases";
import CreportStats from "./components/CreportStats";
import AddCase from "./components/AddComponements/AddCase";
import AlertsAdd from "./components/AlertsAdd";
import Incident from "./components/Incident";
import Alerts from "./components/Alerts";
import Custumers from "./components/Customers.jsx";
import CustomerInfo from "./components/CustomersInfo.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="SubscriptionHistory" element={<SubscriptionHistory />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="transaction/info" element={<TransactionInfo />} />
          <Route path="transaction/stats" element={<TransactionStats />} />
          <Route path="alerts/add" element={<AlertsAdd />} />
          <Route path="useraccess" element={<UserAccess />} />
          <Route path="trustscore" element={<Trustscore />} />
          <Route path="treportstats" element={<TreportStats />} />
          <Route path="cases" element={<Cases />} />
          <Route path="cases/add" element={<AddCase />} />
          <Route path="creportstats" element={<CreportStats />} />
          <Route path="incidents" element={<Incident />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="customers" element={<Custumers />} />
          <Route path="customers/:customerId" element={<CustomerInfo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
