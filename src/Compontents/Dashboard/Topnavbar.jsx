// TopNavbar.js
import React, { useState } from 'react';


const TopNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white shadow-md flex justify-between items-center px-6`}>
      <div className={`text-xl font-bold`}>Dashboard</div>
      <div className={`flex items-center`}>
        {isLoggedIn ? (
          <div className={`flex items-center space-x-4`}>
            <span className={`text-lg`}>Welcome, User!</span>
            <button onClick={handleLogout} className={`bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded`}>Logout</button>
          </div>
        ) : (
          <button onClick={handleLogin} className={`bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded`}>Login</button>
        )}
      </div>
    </div>
  );
};

export default TopNavbar;
