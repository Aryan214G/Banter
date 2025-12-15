import React from 'react'
import styles from "./AuthHeader.module.css"
const AuthHeader = () => {
  return (
    <h1 className={styles.title}>
        Join the <span className={styles.highlight}>Banter</span>
    </h1>
  )
}

export default AuthHeader