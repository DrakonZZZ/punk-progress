import { RouterProvider } from 'react-router-dom';
import './App.css';
import Titlebar from './components/Titlebar';
import appRouter from './router/AppRouter';

const Layout = () => {
  return (
    <div>
      <Titlebar />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Layout;
