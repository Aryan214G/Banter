import React from "react";
import "./loginSignup.css";
const LoginSignup = () => {
    return (
    <div className = "login-signup">
        <div className="header">Sign Up</div>
        <div className="inputs">
            <div className="name">Name
                <input type = "text"/>
            </div>
            <div className="Username"> Username
                <input type = "username"/>
            </div>
            <div className="Password"> Password
                <input type = "password"/>
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