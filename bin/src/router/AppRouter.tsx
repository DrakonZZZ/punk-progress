import { createBrowserRouter } from 'react-router-dom';
import {
  CharacterMain,
  GameMain,
  LoadMenu,
  MainMenu,
  Settings,
} from '../pages';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainMenu />,
  },
  {
    path: '/load',
    element: <LoadMenu />,
  },
  {
    path: '/Settings',
    element: <Settings />,
  },
  {
    path: '/charSelect',
    element: <CharacterMain />,
  },

  {
    path: '/game',
    element: <GameMain />,
  },
]);

export default appRouter;
