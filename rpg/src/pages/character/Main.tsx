import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Race from './components/Race';
import { Stats } from './components/Stats';

export const Main = () => {
  const [characterName, setCharacterName] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
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
              value={characterName}
              onChange={handleInputChange}
            />
          </div>
          <div className="char-info">
            <h3>Your Backstory</h3>
            <p>
              In the sprawling cityscape of NeoGenesis, a hacker awakens with a
              fractured memory and cybernetic enhancements, remnants of a failed
              resistance against corporate overlords. Saved by a mysterious
              figure, they navigate the digital underbelly, piecing together
              their past while uncovering the megacorps' dark secrets. Armed
              with hacking skills and determination, they strive to reclaim
              their identity, expose the truth, and reignite the flames of
              rebellion in a world dominated by technology and oppression.
            </p>
          </div>
        </div>
        <Link
          to={characterName ? '/game' : '#'}
          className={`${characterName ? 'char-button' : 'disabled'}`}
        >
          NEXT
        </Link>
      </div>
    </main>
  );
};
