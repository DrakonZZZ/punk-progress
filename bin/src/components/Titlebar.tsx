import { ReactComponent as Min } from '../assets/icons/minimize-2.svg';
import { ReactComponent as Max } from '../assets/icons/maximize.svg';
import { ReactComponent as Close } from '../assets/icons/x-square.svg';
const { ipcRenderer } = window.require('electron');

const Titlebar = () => {
  const minimizeWindow = () => {
    ipcRenderer.send('minimize-window');
  };

  const maximizeWindow = () => {
    ipcRenderer.send('maximize-window');
  };

  const closeWindow = () => {
    ipcRenderer.send('close-window');
  };

  const strokeColor = '#770014';

  return (
    <div className="titlebar">
      <img
        src="./screen_images/logo.png"
        alt="main-ligo"
        className="titlebar-logo"
      />
      <span className="titleBar-button">
        <button id="minimize" onClick={minimizeWindow}>
          <Min stroke={strokeColor} width={18} height={18} />
        </button>
        <button id="maximize" onClick={maximizeWindow}>
          <Max stroke={strokeColor} width={18} height={18} />
        </button>
        <button id="quit" onClick={closeWindow}>
          <Close stroke={strokeColor} width={18} height={18} />
        </button>
      </span>
    </div>
  );
};

export default Titlebar;
