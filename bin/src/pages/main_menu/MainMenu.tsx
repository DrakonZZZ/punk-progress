import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <main
      style={{ color: 'white' }}
      className="main-menu-container image-container"
    >
      <div className="mainmenu-link">
        <Link to={'/charSelect'}>NEW GAME</Link>
        <Link to={'/load'}>LOAD</Link>
        <Link to={'/settings'} className="settings-link">
          SETTINGS
        </Link>
      </div>
    </main>
  );
};

export default MainMenu;
