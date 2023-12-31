import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import Race from './components/Race';
import { Stats } from './components/Stats';
import { usePlayerContext } from '../../context/playerContext';

export const Main = () => {
  const { playerName, setPlayerName, selectedRace } = usePlayerContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  return (
    <main style={{ color: 'white' }} className="character-container">
      <Race />
      <Stats />

      <div className="charInfo-container">
        <div>
          <div className="char-input">
            <div>
              <h3>Your</h3>
              <h2>Character name</h2>
            </div>
            <input
              type="text"
              value={playerName}
              onChange={handleInputChange}
              placeholder="Volden"
            />
          </div>
          <div className="char-info">
            <h3>Your Backstory</h3>
            <p>{selectedRace.backstory}</p>
          </div>
        </div>
        <div>
          {!playerName && (
            <div className="char-btn-warn">Please provide a character name</div>
          )}
          <Link
            to={playerName ? '/game' : '#'}
            className={`${playerName ? 'char-button' : 'disabled'}`}
          >
            NEXT
          </Link>
        </div>
      </div>
    </main>
  );
};
