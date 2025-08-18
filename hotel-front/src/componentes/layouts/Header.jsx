import styles from "../../styles/Header.module.css";

import { Link } from 'react-router-dom';
import React from "react";

const Header = () => {
  return (
    <header id="hader" className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            className={styles.logoImg}
            src="logo.png"
            width="400"
            alt="Hotel"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;