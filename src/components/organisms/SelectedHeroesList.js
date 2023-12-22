import React from 'react';
import SelectedHeroCard from '../molecules/SelectedHeroCard';
import styles from '../styles/SelectedHeroCard.module.css';

const SelectedHeroesList = ({ selectedHeroes = [], onRemove }) => {
  return (
    <ul className={styles.selectedUl}>
      {selectedHeroes.map((hero) => (
        <SelectedHeroCard key={hero.id} hero={hero} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default SelectedHeroesList;
