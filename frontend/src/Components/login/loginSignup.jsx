import React, { useState } from "react";
import styles from "./loginSignup.module.css";

const LoginSignup = () => {
  const [stateVariable, setStateVariable] = useState("Sign Up");
  return (
    <div className={styles.loginSignup}>
      <div className={styles.header}>{stateVariable}</div>

      <div className={styles.content}>
        <div className={styles.inputs}>
          <div>
            <label htmlFor="name">Username</label>
            <input id="name" type="text" />
          </div>

          {stateVariable === "Sign Up" 
          && (<div>
            <label htmlFor="email">email</label>
            <input id="email" type="email" />
          </div>)}
          

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
        </div>

        <div className={styles.submit}>
          <button className={stateVariable === "Sign Up" ? styles.activeBtn : styles.inactiveBtn} onClick = {() => setStateVariable("Sign Up")}>
            Sign Up</button>
          <button className={stateVariable === "Login" ? styles.activeBtn : styles.inactiveBtn} onClick = {() => setStateVariable("Login")}>
            Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
