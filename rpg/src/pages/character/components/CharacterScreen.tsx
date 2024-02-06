import { usePlayerContext } from '../../../context/playerContext';
import { ChangeEvent, useState } from 'react';
import Race from './Race';
import { Stats } from './Stats';
import { Link } from 'react-router-dom';

export const CharacterScreen = () => {
  const { selectedRace, setPlayerName } = usePlayerContext();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleNextClick = () => {
    setPlayerName(inputValue);
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
              value={inputValue}
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
          {!inputValue && (
            <div className="char-btn-warn">Please provide a character name</div>
          )}
          <Link
            to={inputValue ? '/game' : '#'}
            className={`${inputValue.length > 4 ? 'char-button' : 'disabled'}`}
            onClick={handleNextClick}
          >
            NEXT
          </Link>
        </div>
      </div>
    </main>
  );
};
