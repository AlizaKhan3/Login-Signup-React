import Input from "../Input/input";
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import "./signup.css"

function Signup() {
    return (
        <div className="container">
            <Card className="innerBox" sx={{ minWidth: 400 }} style={{ height: 400 }}>
                <CardContent>
                    <Typography variant="h5" component="div" className="heading" >
                        Signup
                    </Typography>
                    <div className="inputFields">
                        <div className="Namediv">
                        <Input label="First Name" placeholder="First name"></Input>
                        <Input label="Last Name" placeholder="Last name"></Input>
                        </div>
                        <Input label="Email" placeholder="Enter your email"></Input>
                        <div className="Namediv">
                        <Input label="Password" placeholder="Enter your password"></Input>
                        <Input label="Confirm Password" placeholder="Confirm your password"></Input>
</div>
                    </div>
                </CardContent>
                <CardActions className="footer">
                <Button className="loginBtn" variant="contained" style={{backgroundColor:" #9900ff", width: "96%"}}>SIGNUP</Button>
                    
                    <Typography className="btnSpan" sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Already have an Account? <span><Button size="small"><Link to="/Login">Login</Link></Button></span>
                    </Typography>
                </CardActions>
            </Card>
        </div>
    )
}

export default Signup;