import { Link } from "react-router-dom";
import ResponsiveAppBar from "../navbar";

function Home(props) {
    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            <h1>Home</h1>
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

export default Home;