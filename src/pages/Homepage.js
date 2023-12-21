import React from 'react';
import Heroi from '../components/organisms/Heroi';
import Sidenav from '../components/organisms/Sidenav';
import Header from '../components/organisms/Header';
import styles from '../components/styles/HomePage.module.css';

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
    