import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <div className="app-container">
    <Router>
      
            <li><Link to="/">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
      

       
      <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
      </Routes>
          
    </Router>
    </div>

  );
}

export default App;

