import React, { useContext, useEffect } from 'react';
import JourneyContext from '../context/JourneyContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './Combate.module.css';
import styleHeroi from '../pages/Hero.module.css'
import {styleBox, styleh2, styleh1} from './CombateStyles';
import CloseIcon from '@mui/icons-material/Close';

function Combate() {
  const { 
      modalOpen,
      setModalOpen,
      selectedHeroes,
      setSelectedHeroes,
      winner,
      setWinner,
      setSearchTerm,
  } = useContext(JourneyContext);

  const closeModal = () => {
  setModalOpen(false);
  setSelectedHeroes([]);
  setSearchTerm('')
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
    <Modal
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={styleBox}>
          <div className={styles.combateTitle}>
            <div className={styles.combateTitle}>
              <Typography sx={styleh2} component="h1">
                {`Winner`}
              </Typography>
              <Typography sx={styleh1} component="h1">
                {`${winner}`}
              </Typography>
              <Button onClick={closeModal}><CloseIcon/></Button>
            </div>
          </div>
          <div className={styles.combateDuelo}>
            <div className={styles.heroiCard1}>
              <h3>{selectedHeroes[0]?.name}</h3>
              <img className={styles.heroiImg2} src={selectedHeroes[0]?.images.sm} alt={selectedHeroes[0]?.name} /> 
              <div className={styles.heroiCard2}>
                <img className={styles.heroiImg} src={selectedHeroes[0]?.images.sm} alt={selectedHeroes[0]?.name} />
                <div className={styles.heroiPowerStats}>
                {selectedHeroes[0]?.powerstats && 
                  Object.keys(selectedHeroes[0]?.powerstats).map((stat, index) => (
                  <div key={index} className={styles.PowerStatsBall}>
                    <p className={styleHeroi.heroiP}>{selectedHeroes[0]?.powerstats[stat]}</p>
                    {selectedHeroes[0]?.powerstats[stat] > selectedHeroes[1]?.powerstats[stat] ? (
                      <div className={styles.greenBall}></div>
                    ) : (
                      <div className={styles.redBall}></div>
                    )}
                  </div>
                ))}
                </div>
              </div>   
            </div>
            <div className={styles.combatePowerStats}>
              <p>Intelligence</p>
              <p>Strength</p>
              <p>Speed</p>
              <p>Durability</p>
              <p>Power</p>
              <p>Combat</p>
            </div>
            <div className={styles.heroiCard1}>
              <h3>{selectedHeroes[1]?.name}</h3>
              <img className={styles.heroiImg2} src={selectedHeroes[1]?.images.sm} alt={selectedHeroes[1]?.name} />
              <div className={styles.heroiCard2}>
                <div className={styles.heroiPowerStats}>
                {selectedHeroes[1]?.powerstats &&
                  Object.keys(selectedHeroes[1]?.powerstats).map((stat, index) => (
                  <div key={index} className={styles.PowerStatsBall}>
                    {selectedHeroes[1]?.powerstats[stat] > selectedHeroes[0]?.powerstats[stat] ? (
                      <div className={styles.greenBall}></div>
                      ) : (
                        <div className={styles.redBall}></div>
                      )}
                    <p className={styleHeroi.heroiP}>{selectedHeroes[1]?.powerstats[stat]}</p>
                  </div>
                ))}
                </div>
                <img className={styles.heroiImg} src={selectedHeroes[1]?.images.sm} alt={selectedHeroes[1]?.name} />
              </div>    
            </div>
          </div>
        </Box>
    </Modal>
  </div>
  );
}
    
export default Combate;