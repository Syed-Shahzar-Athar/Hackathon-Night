import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
        <img src="/images/images.png" alt="Description" />      
            <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/Receptionist"
                className="block p-2 rounded hover:bg-gray-700"
              >
                Receptionist
              </Link>
            </li>
            <li>
              <Link
                to="/departmentstaff"
                className="block p-2 rounded hover:bg-gray-700"
              >
                Department Staff
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block p-2 rounded hover:bg-gray-700"
              >
                Admin Panel
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Saylani Beneficiary App</h1>
        <p className="text-lg text-gray-600">
          This is the main content area. Customize it as needed for your app.
        </p>

        {/* Example Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Feature 1 - Receptionist</h3>
            <p className="text-sm text-gray-500">
              <ul>
                <li>1. Registers beneficiaries, capturing CNIC, name, contact details, address, and
                purpose.</li>
                <li>2. Assigns tokens based on the purpose and department.
                </li>
                <li>3. Manages initial data entry and verification</li>
              </ul>
            </p>
          </div>
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Feature 2 - Department Staff</h3>
            <p className="text-sm text-gray-500">
              <ul>
                <li>1. Scans tokens to retrieve detailed beneficiary information.</li>
                <li>2. Updates assistance status (e.g., In Progress, Completed).
                </li>
                <li>3. Notes remarks or actions taken during assistance.</li>

              </ul>
            </p>
          </div>
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Feature 3 - Admin Panel</h3>
            <p className="text-sm text-gray-500">
              <ul>
                <li>1. Full access to the system.</li>
                {/* <li>2. Full access to the system.</li> */}

              </ul>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;