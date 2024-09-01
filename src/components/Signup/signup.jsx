import Input from "../Input/input";
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";
import "./signup.css"
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

function Signup() {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [error, showErrorAlert] = useState("")
    const [noError, showSuccess] = useState("")
    const [submitButtonDisabled, setBtnToDisable] = useState(false);

    const handleSubmission = () => {
        if (!value.firstName || !value.lastName || !value.email || !value.password || !value.confirmPassword) {
            showErrorAlert("Please fill all the fields");
            return;
        }
        if (value.password !== value.confirmPassword) {
            showErrorAlert("Incorrect Password");
            showSuccess("");
            return;
        } else {
            setBtnToDisable(true);
            createUserWithEmailAndPassword(auth, value.email, value.password, value.confirmPassword)
                .then(async(userCredential) => {
                    setBtnToDisable(false);
                    const user = userCredential.user;
                    await updateProfile(user, {
                        displayName: value.firstName +" " + value.lastName,
                    });
                    showSuccess("Signed in Successfully!");
                    console.log("myUser-->", user);
                    showErrorAlert("");
                    navigate("/AppDashboard")
                })
                .catch((error) => {
                    setBtnToDisable(false);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Error->", errorMessage)
                    showErrorAlert(errorMessage);
                    showSuccess("");
                });
        }
    }

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
                        Signup
                    </Typography>
                    <div className="inputFields">
                        <div className="Namediv">
                            <Input label="First Name" type="text" placeholder="First name" onChange={(e) => setValue((prev) => ({ ...prev, firstName: e.target.value }))}></Input>
                            <Input label="Last Name" type="text" placeholder="Last name" onChange={(e) => setValue((prev) => ({ ...prev, lastName: e.target.value }))}></Input>
                        </div>
                        <Input label="Email" type="email" placeholder="Enter your email" onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))}></Input>
                        <div className="Namediv">
                            <Input label="Password" type="password" placeholder="Enter your password" onChange={(e) => setValue((prev) => ({ ...prev, password: e.target.value }))}></Input>
                            <Input label="Confirm Password" type="password" placeholder="Confirm your password" onChange={(e) => setValue((prev) => ({ ...prev, confirmPassword: e.target.value }))}></Input>
                        </div>
                    </div>
                </CardContent>
                <CardActions className="footer">
                    <Button onClick={handleSubmission} disabled={submitButtonDisabled} className="loginBtn" variant="contained" style={{ backgroundColor: " #9900ff", width: "96%" }}>SIGNUP</Button>
                    <Typography className="btnSpan" sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Already have an Account? <span><Button size="small"><Link to="/Login">Login</Link></Button></span>
                    </Typography>
                </CardActions>
            </Card>
        </div>
    )
}

export default Signup;