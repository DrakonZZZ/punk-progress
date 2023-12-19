import { ReactNode } from 'react';

export interface PlayerContextProp {
  children: ReactNode;
}

export interface CharacterStats {
  Strength: number;
  Agility: number;
  Intelligence: number;
  Charisma: number;
  Dexterity: number;
  Luck: number;
  Vitality: number;
  Total: number;
}

export interface RaceData {
  id: number;
  raceName: string;
  backstory: string;
  physicalAttributes: string;
  skills: string;
  additionalInfo: string;
}

export interface PlayerContextValue {
  playerName: string;
  setPlayerName: React.Dispatch<React.SetStateAction<string>>;
  selectedRace: RaceData;
  setSelectedRace: React.Dispatch<React.SetStateAction<RaceData>>;
  charStats: CharacterStats;
  setCharacterStats: React.Dispatch<React.SetStateAction<CharacterStats>>;
}
