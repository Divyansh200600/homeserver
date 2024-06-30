

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = () => {
    // Logic to handle successful login (set isLoggedIn to true)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Logic to handle logout (set isLoggedIn to false)
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {/* Conditionally render Navbar based on isLoggedIn */}
      {isLoggedIn && <Navbar onLogout={handleLogout} />}

      {/* Routes */}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />

        {/* Private route */}
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
