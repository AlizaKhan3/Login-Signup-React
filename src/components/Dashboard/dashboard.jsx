import Login from "../Login/login";
import Signup from "../Signup/signup";
import { Link } from "react-router-dom";


function AppDashboard(props) {
  return (
      <div>
          <h1>Dashboard</h1>
          <div>
              <button>
                  <Link to="/Login">Login</Link>
              </button>
              <button>
                  <Link to="/Signup">Signup</Link>
              </button>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <h2> {props.name  ?
                  `Welcome, ${props.name}`
                  :
                  "Login Please"
           }
          </h2>
      </div >

  )
}

export default AppDashboard;
