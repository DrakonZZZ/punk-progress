import './styles/char-style.css';
import { Link } from 'react-router-dom';

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
            {Array(20)
              .fill(1)
              .map((char, idx) => {
                return <div key={idx} className="char-card"></div>;
              })}
          </div>
          <div className="character-image"></div>
        </div>
      </div>
    </main>
  );
};

export default CharacterMain;
