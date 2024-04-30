import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { MyClasses, Dashboard, Class, AllClasses } from './Pages';

function App() { 
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/my-classes" element={<MyClasses />} />
      <Route path="/all-classes" element={<AllClasses />} />
      <Route path="/class" element={<Class />} />
    </Routes>
  </Router>
  );
}

export default App;