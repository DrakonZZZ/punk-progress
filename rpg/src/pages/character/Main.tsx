import { useEffect } from 'react';
import { usePlayerContext } from '../../context/playerContext';
import { CharacterScreen } from './components/CharacterScreen';
import LoadScreen from './components/LoadScreen';

export const Main = () => {
  const { playerName, existingPlayer, setExistingPlayer } = usePlayerContext();

  useEffect(() => {
    if (playerName) {
      setExistingPlayer(true);
    } else {
      setExistingPlayer(false);
    }
  }, [playerName, setExistingPlayer]);

  return <>{existingPlayer ? <LoadScreen /> : <CharacterScreen />}</>;
};
