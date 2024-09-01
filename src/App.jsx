import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home/home';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
// import Dashboard from '@mui/icons-material/Dashboard';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import AppDashboard from './components/Dashboard/dashboard';

function App() {
  const [UserisAuthenticated, setUserDetails] = useState("");
 
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserDetails(user.displayName);
      } else {
        setUserDetails("")
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/AppDashboard" element={<AppDashboard name={UserisAuthenticated} />} />
          <Route path="/" element={<Home name={UserisAuthenticated} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
