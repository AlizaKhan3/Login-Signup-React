import "./login.css"
import Input from "../Input/input";
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="container">
            <Card className="innerBox" sx={{ minWidth: 400 }} style={{ height: 400 }}>
                <CardContent>
                    <Typography variant="h5" component="div" className="heading" >
                        Login
                    </Typography>
                    <div className="inputFields">
                        <Input label="Email" placeholder="Enter your email"></Input>
                        <Input label="Password" placeholder="Enter your password"></Input>
                    </div>
                </CardContent>
                <CardActions className="footer">
                <Button className="loginBtn" variant="contained" style={{backgroundColor:" #9900ff", width: "96%"}}>LOGIN</Button>
                    
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