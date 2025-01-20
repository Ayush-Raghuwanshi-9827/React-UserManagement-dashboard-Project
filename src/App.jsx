import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import GoalDetails from "./Components/GoalDetails";
import HomePage from "./Pages/HomePage";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/goals/:userId" element={<GoalDetails />} />
      </Routes>
    </Router>
  )
}

export default App
