// src/App.jsx

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/ui/Header/Header";

import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/Registration/Registration";
import ProfilePage from "./pages/Profile/Profile";
import ContactsPage from "./pages/Contacts/Contacts";
import ServicesPage from "./pages/Services/Services";

import "./App.module.css";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="app-wrapper">
      <Header />
      {isHomePage}

      <main className="content">
        <Routes>
          <Route index element={<HomePage />} />

          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
