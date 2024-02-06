import { createContext, useContext, useEffect, useState } from 'react';
import {
  CharacterStats,
  PlayerContextProp,
  PlayerContextValue,
  RaceData,
} from '../types/player.types';
import { defaultStats, selected } from '../constant/racedata';

const GlobalContext = createContext<PlayerContextValue | undefined>(undefined);

export const usePlayerContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      'usePlayerContext must be used within a PlayerContext Provider'
    );
  }
  return context;
};

const PlayerContext = ({ children }: PlayerContextProp) => {
  const [playerName, setPlayerNameState] = useState('');
  const [selectedRace, setSelectedRaceState] = useState<RaceData>(selected);
  const [charStats, setCharacterStatsState] =
    useState<CharacterStats>(defaultStats);

  useEffect(() => {
    const storedPlayerName = localStorage.getItem('playerName');
    const storedSelectedRace = localStorage.getItem('selectedRace');
    const storedCharStats = localStorage.getItem('charStats');

    if (storedPlayerName) setPlayerNameState(storedPlayerName);
    if (storedSelectedRace)
      setSelectedRaceState(JSON.parse(storedSelectedRace));
    if (storedCharStats) setCharacterStatsState(JSON.parse(storedCharStats));
  }, []);

  useEffect(() => {
    localStorage.setItem('playerName', playerName);
  }, [playerName]);

  useEffect(() => {
    localStorage.setItem('selectedRace', JSON.stringify(selectedRace));
  }, [selectedRace]);

  useEffect(() => {
    localStorage.setItem('charStats', JSON.stringify(charStats));
  }, [charStats]);

  const setPlayerName = (name: string) => {
    setPlayerNameState(name);
  };
  const setSelectedRace = (race: RaceData) => {
    setSelectedRaceState(race);
  };

  const setCharacterStats = (stats: CharacterStats) => {
    setCharacterStatsState(stats);
  };

  const contextValue: PlayerContextValue = {
    playerName,
    selectedRace,
    charStats,
    setPlayerName,
    setSelectedRace,
    setCharacterStats,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default PlayerContext;
