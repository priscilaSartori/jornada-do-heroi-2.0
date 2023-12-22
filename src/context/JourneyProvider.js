import { useState, useMemo } from 'react';
import { node } from 'prop-types';
import JourneyContext from './JourneyContext';

function JourneyProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [winner, setWinner] = useState('');
  const [selectedHeroesMiniatures, setSelectedHeroesMiniatures] = useState([]);

  const values = useMemo(() => ({
    searchTerm,
    setSearchTerm,
    selectedHeroes,
    setSelectedHeroes,
    modalOpen,
    setModalOpen,
    winner,
    setWinner,
    selectedHeroesMiniatures,
    setSelectedHeroesMiniatures,
  }), [
    searchTerm,
    selectedHeroes,
    modalOpen,
    winner, 
    selectedHeroesMiniatures,
  ]);

  return (
    <JourneyContext.Provider value={ values }>
      {children}
    </JourneyContext.Provider>
  );
}
JourneyProvider.propTypes = {
  children: node.isRequired,
};

export default JourneyProvider;