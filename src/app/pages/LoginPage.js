import React, { useState } from 'react';
import '../css/LoginPage.css';
import Button from '@material-ui/core/Button';
import {auth, provider} from '../configs/firebase';
import {
    Redirect
} from "react-router-dom";

const LoginPage = (props) => {
    const [LoginRedirect, setLoginRedirect] = useState(false)

    const signUp = () => {
        auth.signInWithPopup(provider).then(() => {
            setLoginRedirect(true)
        }).catch((error) => {
            alert(error.message)
        })
    }

    if (LoginRedirect === true) {
        return <Redirect to="/dashboard" />
    } else {
        return(
            <div style={{display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center', flexDirection: 'column' }} >
                <div className="logo">
                    <span>Te</span>ch<span>V</span>ed<span>a</span>
                </div>
                <Button style={{color: '#fff'}} onClick={signUp} variant="contained" size="large" color="primary" disableElevation>
                    Sign In With Google
                </Button>
            </div>
        );
    }
}   


export default LoginPage;