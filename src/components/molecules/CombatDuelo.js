import React from 'react';
import styles from '../styles/CombatDuelo.module.css';
import { Lightbulb, FitnessCenter, Speed, Security, FlashOn, SportsKabaddi } from '@mui/icons-material';

function CombatDuelo({ heroes }) {
  
  return (
    <div className={styles.container}>
      <div className={styles.heroiCard}>
        <h2 className={styles.title}>{heroes[0].name}</h2>
        <div className={styles.heroiCard2}>
          <img className={styles.heroiImg} src={heroes[0].images.sm} alt={heroes?.name} />
          <div className={styles.heroiPowerStats}>
            {heroes[0].powerstats &&
              Object.keys(heroes[0].powerstats).map((stat, index) => (
                <div key={index} className={styles.powerstats}>
                  <p>{heroes[0].powerstats[stat]}</p>
                  { 
                    heroes[0].powerstats[stat] > heroes[1].powerstats[stat] 
                    ? <div className={styles.greenBall}></div> 
                    : <div className={styles.redBall}></div>
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
      
      <div className={styles.combatePowerStats}>
        <p><Lightbulb style={{ fontSize: 20, marginRight: 8 }}/>Intelligence</p>
        <p><FlashOn style={{ fontSize: 15, marginRight: 8 }}/>Strength</p>
        <p><Speed style={{ fontSize: 15, marginRight: 8 }}/>Speed</p>
        <p><Security style={{ fontSize: 15, marginRight: 8 }}/>Durability</p>
        <p><FitnessCenter style={{ fontSize: 15, marginRight: 8 }}/>Power</p>
        <p><SportsKabaddi style={{ fontSize: 15, marginRight: 8 }}/>Combat</p>
      </div>
      
      <div className={styles.heroiCard}>
        <h2 className={styles.title}>{heroes[1].name}</h2>
        <div className={styles.heroiCard2}>
        <div className={styles.heroiPowerStats}>
            {heroes[1].powerstats &&
              Object.keys(heroes[1].powerstats).map((stat, index) => (
                <div key={index} className={styles.powerstats}>
                  { 
                    heroes[1].powerstats[stat] > heroes[0].powerstats[stat] 
                    ? <div className={styles.greenBall}></div> 
                    : <div className={styles.redBall}></div>
                  }
                  <p>{heroes[1].powerstats[stat]}</p>
                </div>
              ))
            }
          </div>
          <img className={styles.heroiImg2} src={heroes[1].images.sm} alt={heroes?.name} />
        </div>
      </div>
    </div>
  );
}

export default CombatDuelo;