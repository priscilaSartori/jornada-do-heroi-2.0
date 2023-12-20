"use client"
import React, { useContext, useEffect, useState } from 'react';
import JourneyContext from '../context/JourneyContext';
import Combate from '../pages/Combate';
import styles from './Hero.module.css';
import { heroisData } from '../hooks/mock';

export default function Heroi() {
  const { searchTerm, selectedHeroes, setSelectedHeroes } = useContext(JourneyContext);
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
    } else if (selectedHeroes.length < 2) {
      setSelectedHeroes([...selectedHeroes, hero]);
    }
  };

  const isHeroSelected = (hero) => selectedHeroes.includes(hero);

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
              <img className={styles.heroiImg} src={hero.images.sm} alt={hero.name} />
              <div className={styles.heroiInfo}>
                <h4 className={styles.heroiH4}>{hero.name}</h4>
                <p className={styles.heroiP}>{hero.slug}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
