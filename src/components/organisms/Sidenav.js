import React, { useContext } from 'react';
import styles from '../styles/Sidenav.module.css';
import JourneyContext from '../../context/JourneyContext';
import SearchIconAtom from '../atoms/SearchIconAtom';
import ButtonAtom from '../atoms/ButtonAtom';
import SelectedHeroes from './SelectedHeroes';

function Sidenav({ selectedHeroesMiniatures, removeFromSelectedHeroesMiniatures }) {
  const { setModalOpen, selectedHeroes, searchTerm, setSearchTerm } = useContext(JourneyContext);

  const openModal = () => {
    setModalOpen(true);
  };

  const combate = selectedHeroes.length === 2;

  return (
    <div className={styles.sidenav}>
      <div className={styles.searchInputContainer}>
        <SearchIconAtom />
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Pesquisar por nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={styles.buttonContainer}>
        <p>Selecione dois personagens e clique em Combate</p>
        <ButtonAtom
          className={`${combate ? styles.buttonActive : styles.buttonDisabled}`}
          disabled={!combate}
          onClick={openModal}
        >
          Combate
        </ButtonAtom>
      </div>
      <div className={styles.selectedContainer}>
        <SelectedHeroes
          selectedHeroes={selectedHeroesMiniatures}
          onRemove={removeFromSelectedHeroesMiniatures}
        />
      </div>
    </div>
  );
}

export default Sidenav;