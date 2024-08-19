'use client'
import styles from './Header.module.css'
import { useState } from 'react';
import Link from 'next/link';

const  Header = () => {

const [ menuStatus, setMenuStatus ] = useState(false);

function handleClick() {
  setMenuStatus(!menuStatus);
 
}

return (
  <header>
    <h1 className={styles.titleContainer}>eatEasy</h1>
    <button onClick={handleClick}>
      <img className={styles.burgerButton} src="menu-open-button.png" alt="Burger toggle menu" />
    </button>


    {menuStatus && (
      // <div className={menuStatus ? styles.menuOpen : styles.menuClosed}>
      <div className={menuStatus ? styles.menuOpen : styles.menuClosed}>
        <nav>
          <p><Link href="/">Home</Link></p>
          <p><Link href="/founders">Log In</Link></p>
          <p><Link href="/founders">Sign Up</Link></p>
        </nav>
      </div>
    )}
  </header>
);
};

export default Header;