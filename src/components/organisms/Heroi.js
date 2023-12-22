"use client"
import React, { useContext, useEffect, useState } from 'react';
import JourneyContext from '../../context/JourneyContext';
import Combate from './Combate';
import styles from '../styles/Heroi.module.css';
import { heroisData } from '../../hooks/mock';
import { Lightbulb, FitnessCenter, Speed, Security, FlashOn, SportsKabaddi } from '@mui/icons-material';
import Sidenav from './Sidenav';

export default function Heroi() {
  const { 
    searchTerm, 
    selectedHeroes, 
    setSelectedHeroes, 
    selectedHeroesMiniatures,
    setSelectedHeroesMiniatures
  } = useContext(JourneyContext);
  const [heroisDisplay, setHeroisDisplay] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      if (heroisData.length > 0) {
        setHeroisDisplay(heroisData);
      } else {
        const response = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans');
        const data = await response.json();
        setHeroisDisplay(data);
      }
    };

    fetchData();
  }, []);

  const filteredHeroes = heroisDisplay.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectHero = (hero) => {
    if (selectedHeroes.includes(hero)) {
      setSelectedHeroes(selectedHeroes.filter((selectedHero) => selectedHero !== hero));
      removeFromSelectedHeroesMiniatures(hero);
    } else if (selectedHeroes.length < 2) {
      setSelectedHeroes([...selectedHeroes, hero]);
      addToSelectedHeroesMiniatures(hero);
    }
  };

  const isHeroSelected = (hero) => selectedHeroes.includes(hero);

  const addToSelectedHeroesMiniatures = (hero) => {
    setSelectedHeroesMiniatures([...selectedHeroesMiniatures, hero]);
  };

  const removeFromSelectedHeroesMiniatures = (hero) => {
    setSelectedHeroes(selectedHeroes.filter((selectedHero) => selectedHero !== hero));
    setSelectedHeroesMiniatures(selectedHeroesMiniatures.filter((selectedHero) => selectedHero !== hero));
  };

  return (
    <div>
      <Combate />
      <div className={styles.heroi}>
        <ul className={styles.heroiUl}>
          {filteredHeroes.map((hero) => (
            <li
              key={hero.id}
              className={`${isHeroSelected(hero) ? styles.heroiLiSelected : styles.heroiLi}`}
              onClick={() => selectHero(hero)}
            >
              {isHeroSelected(hero) ? 
                <div>
                  <img className={styles.heroiImg} src={hero.images.sm} alt={hero.name} />
                  <div className={styles.heroiInfo}>
                    <div className={styles.heroiPowerStats}>
                      <p className={styles.powerStats}>
                        <Lightbulb style={{ fontSize: 15, marginRight: 8 }}/>
                        Intelligence:
                      </p>
                      <span>{hero.powerstats.intelligence}</span>
                    </div>
                    <div className={styles.heroiPowerStats}>
                      <p className={styles.powerStats}>
                        <FlashOn style={{ fontSize: 15, marginRight: 8 }}/>
                        Strength:
                      </p>
                      <span>{hero.powerstats.strength}</span>
                    </div>
                    <div className={styles.heroiPowerStats}>
                      <p className={styles.powerStats}>
                        <Speed style={{ fontSize: 15, marginRight: 8 }}/>
                        Speed:
                      </p>
                      <span>{hero.powerstats.speed}</span>
                    </div>
                    <div className={styles.heroiPowerStats}>
                      <p className={styles.powerStats}>
                        <Security style={{ fontSize: 15, marginRight: 8 }}/>
                        Durability:
                      </p>
                      <span>{hero.powerstats.durability}</span>
                    </div>
                    <div className={styles.heroiPowerStats}>
                      <p className={styles.powerStats}>
                        <FitnessCenter style={{ fontSize: 15, marginRight: 8 }}/>
                        Power:
                      </p>
                      <span>{hero.powerstats.power}</span>
                    </div>
                    <div className={styles.heroiPowerStats}>
                      <p className={styles.powerStats}>
                        <SportsKabaddi style={{ fontSize: 15, marginRight: 8 }}/>
                        Combat:
                      </p>
                      <span>{hero.powerstats.combat}</span>
                    </div>
                  </div>                  
                </div> :
                <div>
                  <img className={styles.heroiImg2} src={hero.images.sm} alt={hero.name} />
                  <h4 className={styles.heroiH4}>{hero.name}</h4>
                </div>
              }
            </li>
          ))}
        </ul>
      </div>
      <Sidenav selectedHeroesMiniatures={selectedHeroesMiniatures} removeFromSelectedHeroesMiniatures={removeFromSelectedHeroesMiniatures} />      
    </div>
  );
}
