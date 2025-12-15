import React from "react";
import styles from "./loginSignup.module.css";

const LoginSignup = () => {
  return (
    <div className={styles.loginSignup}>
      <div className={styles.header}>Sign Up</div>

      <div className={styles.content}>
        <div className={styles.inputs}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>

          <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
        </div>

        <div className={styles.submit}>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
