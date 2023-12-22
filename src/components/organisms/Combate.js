import React, { useContext, useEffect } from 'react';
import JourneyContext from '../../context/JourneyContext';
import CustomModal from './CustomModal';
import ButtonAtom from '../atoms/ButtonAtom';
import CustomTypography from '../atoms/CustomTypography';
import CombatDuelo from '../molecules/CombatDuelo';
import BoxAtom from '../atoms/BoxAtom';
import { styleBox, styleh2, styleh1 } from '../styles/CombateStyles';
import styles from '../styles/Combate.module.css';

function Combate() {
  const { 
    modalOpen,
    setModalOpen,
    selectedHeroes,
    setSelectedHeroes,
    winner,
    setWinner,
    setSearchTerm,
    setSelectedHeroesMiniatures,
  } = useContext(JourneyContext);

  const closeModal = () => {
    setModalOpen(false);
    setSelectedHeroes([]);
    setSearchTerm('');
    setSelectedHeroesMiniatures([]);
  };

  const calculateTotalPowerStats = (hero) => {
    return Object.values(hero.powerstats).reduce((total, value) => total + parseInt(value, 10), 0);
  };

  useEffect(() => {
    const calculateWinner = () => {
      if (selectedHeroes.length === 2) {
        const totalPowerStatsHero1 = calculateTotalPowerStats(selectedHeroes[0]);
        const totalPowerStatsHero2 = calculateTotalPowerStats(selectedHeroes[1]);

        if (totalPowerStatsHero1 > totalPowerStatsHero2) {
          setWinner(selectedHeroes[0].name);
        } else if (totalPowerStatsHero2 > totalPowerStatsHero1) {
          setWinner(selectedHeroes[1].name);
        } else {
          setWinner('Empate!');
        }
      }
    };

    calculateWinner();
  }, [selectedHeroes, setWinner]);

  return (
    <div>
      <CustomModal open={modalOpen} onClose={closeModal}>
        <BoxAtom sx={styleBox}>
          <div className={styles.combateTitle1}>
            <div className={styles.combateTitle2}>
              <CustomTypography sx={styleh2} variant="h2">Winner</CustomTypography>
              <CustomTypography sx={styleh1} variant="h1">{winner}</CustomTypography>
            </div>
            <ButtonAtom onClick={closeModal} isCloseButton/>
          </div>
          <CombatDuelo heroes={selectedHeroes} />
        </BoxAtom>
      </CustomModal>
    </div>
  );
}

export default Combate;