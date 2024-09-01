import "./login.css"
import Input from "../Input/input";
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


function Login() {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        email: "",
        password: ""
    })

    const [error, showErrorAlert] = useState("")
    const [noError, showSuccess] = useState("")
    const [submitButtonDisabled, setBtnToDisable] = useState(false);

    const handleSubmission = () => {
        if (!value.email || !value.password) {
            showErrorAlert("Please fill all the fields");
            return;
        }
        setBtnToDisable(true);

        signInWithEmailAndPassword(auth, value.email, value.password)
            .then(async (res) => {
                setBtnToDisable(false);
                navigate("/AppDashboard")
                showSuccess("Logged in Successfully!")
            })
            .catch((error) => {
                setBtnToDisable(false);
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error->", errorMessage)
                showErrorAlert(errorMessage);
            });
    };

    return (
        <div className="container">
            {error && (
                <div>
                    <Alert severity="error" className="errorMsg">{error}</Alert>
                </div>
            )}
            {noError && (
                <div>
                    <Alert severity="success">{noError}</Alert>
                </div>
            )}
            <Card className="innerBox" sx={{ minWidth: 400 }} style={{ height: 400 }}>
                <CardContent>
                    <Typography variant="h5" component="div" className="heading" >
                        Login
                    </Typography>
                    <div className="inputFields">
                        <Input label="Email" onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))} placeholder="Enter your email"></Input>
                        <Input label="Password" onChange={(e) => setValue((prev) => ({ ...prev, password: e.target.value }))} placeholder="Enter your password"></Input>
                    </div>
                </CardContent>
                <CardActions className="footer">
                    <Button disabled={submitButtonDisabled} onClick={handleSubmission} className="loginBtn" variant="contained" style={{ backgroundColor: " #9900ff", width: "96%" }}>LOGIN</Button>
                    <Typography className="btnSpan" sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Don't have an Account? <span><Button size="small"><Link to="/Signup">Signup</Link></Button></span>
                    </Typography>
                </CardActions>
            </Card>
        </div>
    )
}

export default Login;



{/* <BasicCard>
                <CardContent>
                     <div className="innerBox">
                    <h1 className="heading">
                        Login
                    </h1>
                    <Input label="Email" placeholder="Enter your email"></Input>
                </div>
                </CardContent>
               
            </BasicCard> */}