import './styles/char-style.css';
import { Link } from 'react-router-dom';
import { CharacterData } from '../../constant/characterData';

const CharacterMain = () => {
  return (
    <main className="character-menu-container">
      <div>
        <div className="page-navigator">
          <Link to="/">BACK</Link>
          <Link to="/">NEXT</Link>
        </div>
        <div className="character-info">
          <span>PROFILE</span>
          <span className="character-name">CHARACTER NAME</span>
        </div>
        <div className="character-profile-box">
          <div className="chararcter-cards">
            {CharacterData.map((char, idx) => {
              console.log(char.name);
              return (
                <div key={idx} className="char-card">
                  <img
                    src={char.characterImage}
                    alt={char.name}
                    className="char-avatar"
                  />
                </div>
              );
            })}
          </div>
          <div className="character-full-image"></div>
        </div>
      </div>
    </main>
  );
};

export default CharacterMain;
