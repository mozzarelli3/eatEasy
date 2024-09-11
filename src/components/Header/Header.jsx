import React from "react";
import styles from './Header.module.css';

export default function Header ({header}) {
    return (
    <>
      <header>
        <h1 className={styles.h1}>My Website Header hello hello</h1>
        <h1>eatEasy</h1>
        {/* Add navigation links or logo */}
      </header>
    </>
  );
};


