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

export interface PlayerValue {
  playerName: string;
  selectedRace: RaceData;
  charStats: CharacterStats;
  existingPlayer: boolean;
}

export interface PlayerContextValue {
  playerName: string;
  selectedRace: RaceData;
  charStats: CharacterStats;
  existingPlayer: boolean;
  setPlayerName: (name: string) => void;
  setSelectedRace: (race: RaceData) => void;
  setCharacterStats: (stats: CharacterStats) => void;
  setExistingPlayer: (existing: boolean) => void;
}
