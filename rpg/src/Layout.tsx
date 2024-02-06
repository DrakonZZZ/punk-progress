import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Titlebar from './components/Titlebar';
import { Main } from './pages/character/Main';
import Game from './pages/gameScreen/Game';
import { CharacterScreen } from './pages/character/components/CharacterScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/charSelect',
    element: <CharacterScreen />,
  },
  {
    path: '/game',
    element: <Game />,
  },
]);

const Layout = () => {
  return (
    <>
      <Titlebar />
      <RouterProvider router={router} />
    </>
  );
};

export default Layout;
