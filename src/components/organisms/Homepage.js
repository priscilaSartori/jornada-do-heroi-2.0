import React from 'react';
import Heroi from './Heroi';
import Sidenav from './Sidenav';
import Header from './Header';
import styles from '../styles/HomePage.module.css';

function Homepage () {

  return (
    <div className={styles.homepage}>
      <Header />
      <Sidenav />
      <Heroi />
    </div>
  );
}

export default Homepage;
    