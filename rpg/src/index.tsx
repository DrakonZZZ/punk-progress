import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import PlayerContext from './context/playerContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <PlayerContext>
    <Layout />
  </PlayerContext>
);
