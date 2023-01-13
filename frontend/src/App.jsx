import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Search from "./pages/Search";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Header from "./components/Header";
import Login from "./pages/LogIn";
import Home from "./pages/home/Home";
import VehicleListFilter from "./pages/VehicleListFilter";
import VehicleList from "./pages/VehicleList";
import VehicleDetails from "./pages/VehicleDetails";
import VehicleReserved from "./pages/VehicleReserved";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/vehicles/filter" element={<VehicleListFilter />} />
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/vehicles/:vehicleId" element={<VehicleDetails />} />
        <Route
          path="/vehicles/:vehicleId/reserved"
          element={<VehicleReserved />}
        />
        <Route
          path="vehicles/filter/reserved/:vehicleId"
          element={<VehicleReserved />}
        />
      </Routes>
    </Router>
  );
}

export default App;
