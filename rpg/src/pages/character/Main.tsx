import { useEffect, useState } from 'react';
import { usePlayerContext } from '../../context/playerContext';
import { CharacterScreen } from './components/CharacterScreen';
import LoadScreen from './components/LoadScreen';

export const Main = () => {
  const { playerName } = usePlayerContext();
  const [existingPlayer, setExistingPlayer] = useState<Boolean>(true);

  useEffect(() => {
    if (playerName) {
      setExistingPlayer(true);
    } else {
      setExistingPlayer(false);
    }
  }, [playerName]);

  return <>{existingPlayer ? <LoadScreen /> : <CharacterScreen />}</>;
};
