import Race from './components/Race';
import { Stats } from './components/Stats';

export const Main = () => {
  return (
    <main style={{ color: 'white' }} className="character-container">
      <Stats />
      <Race />
      <div className="charInfo-container">
        <div>
          <div className="char-input">
            <div>
              <h3>Your</h3>
              <h2>Character name</h2>
            </div>
            <input type="text" />
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

        <button className="char-button">NEXT</button>
      </div>
    </main>
  );
};
