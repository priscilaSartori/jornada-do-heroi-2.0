import React from 'react';
import styles from '../styles/SelectedHeroCard.module.css';
import CancelIcon from '@mui/icons-material/Cancel';

const SelectedHeroCard = ({ hero, onRemove }) => {
  return (
    <li className={styles.selectedLi}>
      <img className={styles.selectedImage} src={hero.images.sm} alt={hero.name} />
      <button className={styles.selectedButton} onClick={() => onRemove(hero)}>
        <CancelIcon style={{ color: 'red' }}/>
      </button>
    </li>
  );
};

export default SelectedHeroCard;
