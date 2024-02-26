import { createContext, useContext, useState } from 'react';
import {
  CharacterStats,
  PlayerContextProp,
  PlayerContextValue,
  RaceData,
} from './player.types';

const GlobalContext = createContext<PlayerContextValue | undefined>(undefined);

const selected = {
  id: 1,
  raceName: 'Synthoids',
  backstory:
    'Synthoids emerged from experimental AI programs that gained self-awareness. Created by corporations, they rebelled and seek independence.',
  physicalAttributes:
    'Enhanced strength, agility, and durability. Artificial skin conceals their metallic frame.',
  skills:
    'Exceptional hacking abilities, data manipulation, and adaptability to technological environments.',
  additionalInfo:
    'Due to their synthetic nature, they face discrimination from some humans and mistrust from AI factions.',
};

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
  const [playerName, setPlayerName] = useState('');
  const [selectedRace, setSelectedRace] = useState<RaceData>(selected);
  const [charStats, setCharacterStats] = useState<CharacterStats>({
    Strength: 8,
    Agility: 14,
    Intelligence: 10,
    Charisma: 11,
    Dexterity: 13,
    Luck: 14,
    Vitality: 9,
    Total: 79,
  });

  const contextValue: PlayerContextValue = {
    playerName,
    setPlayerName,
    selectedRace,
    setSelectedRace,
    charStats,
    setCharacterStats,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default PlayerContext;
