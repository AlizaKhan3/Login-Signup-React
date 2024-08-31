import "./login.css"
import Input from "../Input/input";

function Login() {
    return (
        <div className="container">
            <div className="innerBox">
                <h1 className="heading">
                    Login
                </h1>
                <Input label="Email" placeholder="Enter your email"></Input>
            </div>
        </div>
    )
}

export default Login;