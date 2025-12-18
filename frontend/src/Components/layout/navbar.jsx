import React from 'react'
import styles from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navbar}>
        <ul>
          <li>Home</li>
          <li>Friends</li>
          <li>Servers</li>
          <li>Profile</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar