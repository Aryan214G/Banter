import React, { useState } from "react";
import styles from "./loginSignup.module.css";

const LoginSignup = () => {

  const [stateVariable, setStateVariable] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const switchMode = (mode) => {
  setStateVariable(mode);
};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      alert("User credentials are empty");
      return;
    }

    if (stateVariable === "Sign Up" && !formData.email) {
      alert("User credentials are empty");
      return;
    }

    if (stateVariable === "Sign Up") {
      console.log("Signing up with:", formData);
    } else {
      console.log("Logging in with:", formData);
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.loginSignup}>
      <div className={styles.header}>{stateVariable}</div>

      <div className={styles.content}>
        <div className={styles.modeSwitcher}>
          <button
            type = "button"
            className={stateVariable === "Sign Up" ? styles.activeBtn : styles.inactiveBtn} 
              onClick={(stateVariable === "Sign Up") 
              ? handleSubmit 
              : () => switchMode("Sign Up")}>
              Sign Up
          </button>

          <button 
          type = "button"
          className={stateVariable === "Login" ? styles.activeBtn : styles.inactiveBtn}
           onClick={(stateVariable === "Login") 
              ? handleSubmit 
              : () => switchMode("Login")}>
            Login</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            <div>
              <label htmlFor="name">Username</label>
              <input 
              id="name"
              name = "username"
              type="text"
              value = {formData.username}
              onChange = {handleChange} />
            </div>

            {stateVariable === "Sign Up" 
            && (<div>
              <label htmlFor="email">email</label>
              <input 
              id="email"
              name = "email"
              type="email"
              value = {formData.email}
              onChange={handleChange}  />
            </div>)}
            

            <div>
              <label htmlFor="password">Password</label>
              <input 
              id="password"
              name = "password" 
              type="password"
              value = {formData.password}
              onChange = {handleChange}
              />
            </div>
          </div>

        
        </form>

        

        
      </div>
    </div>
  );
};

export default LoginSignup;
