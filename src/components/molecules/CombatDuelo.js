import React from 'react';
import styles from '../styles/CombatDuelo.module.css';
import { Lightbulb, FitnessCenter, Speed, Security, FlashOn, SportsKabaddi } from '@mui/icons-material';

function CombatDuelo({ heroes }) {
  if (!heroes || heroes.length !== 2) {
    return null;
  }

  const [hero1, hero2] = heroes;

  const renderPowerStats = (stats, heroIndex) => (
    stats &&
    Object.keys(stats).map((stat, index) => (
      <div key={index} className={styles.powerstats}>
        {heroIndex === 0 ? (
          <>
            <p>{stats[stat]}</p>
            {stats[stat] > hero2.powerstats[stat] ? (
              <div className={styles.greenBall}></div>
            ) : (
              <div className={styles.redBall}></div>
            )}
          </>
        ) : (
          <>
            {stats[stat] > hero1.powerstats[stat] ? (
              <div className={styles.greenBall}></div>
            ) : (
              <div className={styles.redBall}></div>
            )}
            <p>{stats[stat]}</p>
          </>
        )}
      </div>
    ))
  );

  return (
    <div className={styles.container}>
      <div className={styles.HeroCard}>
        <h2 className={styles.title}>{hero1.name}</h2>
        <div className={styles.heroCard2}>
          <img className={styles.heroImg} src={hero1.images.sm} alt={hero1.name} />
          <div className={styles.heroPowerStats}>
            {renderPowerStats(hero1.powerstats, 0)}
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
      
      <div className={styles.HeroCard}>
        <h2 className={styles.title}>{hero2.name}</h2>
        <div className={styles.heroCard2}>
          <div className={styles.heroPowerStats}>
            {renderPowerStats(hero2.powerstats, 1)}
          </div>
          <img className={styles.heroImg2} src={hero2.images.sm} alt={hero2.name} />
        </div>
      </div>
    </div>
  );
}

export default CombatDuelo;