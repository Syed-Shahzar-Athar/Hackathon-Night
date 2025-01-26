// src/routes/routes.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import { useSelector } from 'react-redux';
import Receptionist from '../pages/Receptionist';
import DepartmentStaff from '../pages/DepartmentStaff';
import Admin from '../pages/Admin';

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  return token ? children : <Navigate to="/login" />;
};

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Receptionist" element={<Receptionist/>} />
      <Route path="/DepartmentStaff" element={<DepartmentStaff/>} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />

      {/* <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;