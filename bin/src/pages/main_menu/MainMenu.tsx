import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <main style={{ color: 'white' }} className="loading-container">
      <section>
        <Link to={'/charSelect'}>New Game</Link>
        <Link to={'/load'}>Load</Link>
        <Link to={'/settings'}>Settings</Link>
      </section>
    </main>
  );
};

export default MainMenu;
