import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import PlayerContext from './context/playerContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PlayerContext>
      <Layout />
    </PlayerContext>
  </React.StrictMode>
);
