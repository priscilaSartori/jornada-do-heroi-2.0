import React from 'react';
import SelectedHeroesList from './SelectedHeroesList';
import styles from '../styles/SelectedHeroCard.module.css';

const SelectedHeroes = ({ selectedHeroes, onRemove }) => {
  return (
    <SelectedHeroesList selectedHeroes={selectedHeroes} onRemove={onRemove} />
  );
};

export default SelectedHeroes;
