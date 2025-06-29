import React, { useState } from 'react';
import './App.css'; // Add this line at the top

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';

import Profile from './components/Profile';
import Reviews from './components/Reaviews';

import FindDoctorSearch from './components/FindDoctorSearch';
import HomePage from './components/Home';




export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}
