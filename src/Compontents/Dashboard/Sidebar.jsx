// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={`fixed top-16 left-0 h-full w-64 bg-gray-800 text-center text-white flex flex-col`}>
      <nav className={`mt-10 flex-1`}>
        <ul>
          <li className={`mb-6`}>
            <Link to="/downline" className={`text-white hover:text-gray-300`}>Downline</Link>
          </li>
          <li className={`mb-6`}>
            <Link to="/user" className={`text-white hover:text-gray-300`}>User</Link>
          </li>
          <li className={`mb-6`}>
            <Link to="/customer" className={`text-white hover:text-gray-300`}>Customer</Link>
          </li>
          <li className={`mb-6`}>
            <Link to="/bmi-calculator" className={`text-white hover:text-gray-300`}>BMI Calculator</Link>
          </li>
          <li className={`mb-6`}>
            <Link to="/bmr-calculator" className={`text-white hover:text-gray-300`}>BMR Calculator</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
