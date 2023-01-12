import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Search from "./pages/Search";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import LogIn from "./pages/Login";
import Home from "./pages/home/Home";
import Calendar from "./components/Calendar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/calendar/:vehicleId" element={<Calendar />} />
      </Routes>
    </Router>
  );
}

export default App;
