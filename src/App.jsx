import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home/home';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import Dashboard from '@mui/icons-material/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
