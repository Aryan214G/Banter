import React from "react";
import "./loginSignup.css";
const LoginSignup = () => {
    return (
    <div className = "login-signup">
        <div className="header">Sign Up</div>
        <div className="inputs">
            <div className="name">
                <label htmlFor="name">Name</label>
                <input id="name" type = "text"/>
            </div>
            <div className="username">
                <label htmlFor="username">Username</label>
                <input id = "username" type = "text"/>
            </div>
            <div className="password">
                <label htmlFor="password">Password</label>
                <input id = "password" type = "password"/>
            </div>
        </div>
        <div className = "submit">
            <div className="sign-up">
                <input type="button" value = "Sign Up"/>
            </div>
            <div className="login">
                <input type = "button" value = "Login"/>
            </div>
        </div>
    </div>
    
    );
};

export default LoginSignup;