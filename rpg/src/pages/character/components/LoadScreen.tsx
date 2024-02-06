import { Link } from 'react-router-dom';
import { usePlayerContext } from '../../../context/playerContext';

const LoadScreen = () => {
  return (
    <main style={{ color: 'white' }} className="loading-container">
      <section>
        <Link to={'/charSelect'}>New Game</Link>
        <div>Load Game</div>
        <div>Exit Game</div>
      </section>
    </main>
  );
};

export default LoadScreen;
