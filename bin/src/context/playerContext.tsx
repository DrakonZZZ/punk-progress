import { createContext, useContext, useEffect, useState } from 'react';
import {
  CharacterStats,
  PlayerContextProp,
  PlayerContextValue,
  PlayerValue,
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
  const [playerState, setPlayerState] = useState<PlayerValue>({
    playerName: '',
    selectedRace: selected,
    charStats: defaultStats,
    existingPlayer: true,
  });

  useEffect(() => {
    const storedPlayerName = localStorage.getItem('playerName');
    const storedSelectedRace = localStorage.getItem('selectedRace');
    const storedCharStats = localStorage.getItem('charStats');
    const storedExistingPlayer = localStorage.getItem('existingPlayer');

    if (storedPlayerName)
      setPlayerState((prevState) => ({
        ...prevState,
        playerName: storedPlayerName,
      }));
    if (storedSelectedRace)
      setPlayerState((prevState) => ({
        ...prevState,
        selectedRace: JSON.parse(storedSelectedRace),
      }));
    if (storedCharStats)
      setPlayerState((prevState) => ({
        ...prevState,
        charStats: JSON.parse(storedCharStats),
      }));
    if (storedExistingPlayer)
      setPlayerState((prevState) => ({
        ...prevState,
        existingPlayer: JSON.parse(storedExistingPlayer),
      }));
  }, []);

  useEffect(() => {
    localStorage.setItem('playerName', playerState.playerName);
  }, [playerState.playerName]);

  useEffect(() => {
    localStorage.setItem(
      'selectedRace',
      JSON.stringify(playerState.selectedRace)
    );
  }, [playerState.selectedRace]);

  useEffect(() => {
    localStorage.setItem('charStats', JSON.stringify(playerState.charStats));
  }, [playerState.charStats]);

  useEffect(() => {
    localStorage.setItem(
      'existingPlayer',
      JSON.stringify(playerState.existingPlayer)
    );
  }, [playerState.existingPlayer]);

  const contextValue: PlayerContextValue = {
    ...playerState,
    setPlayerName: (name: string) =>
      setPlayerState((prevState) => ({ ...prevState, playerName: name })),
    setSelectedRace: (race: RaceData) =>
      setPlayerState((prevState) => ({ ...prevState, selectedRace: race })),
    setCharacterStats: (stats: CharacterStats) =>
      setPlayerState((prevState) => ({ ...prevState, charStats: stats })),
    setExistingPlayer: (existing: boolean) => {
      if (existing !== playerState.existingPlayer) {
        setPlayerState((prevState) => ({
          ...prevState,
          existingPlayer: existing,
        }));
      }
    },
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default PlayerContext;
