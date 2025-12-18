import React from 'react'
import styles from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbar}>navbar

    <ul>
      <li>Home</li>
      <li>Friends</li>
      <li>Servers</li>
      <li>Profile</li>
    </ul>
    </div>
  )
}

export default Navbar