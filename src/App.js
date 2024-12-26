import { ReactKeycloakProvider } from "@react-keycloak/web";
import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import keycloak from "./keycloak";
import Account from "./pages/Account";
import Customer from "./pages/Customer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/account" element={<Account />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </Router>
    </ReactKeycloakProvider>
  );
}

export default App;
