import { ReactComponent as Circle } from '../assets/icons/circle.svg';
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
          <Circle stroke={strokeColor} width={18} height={18} />
        </button>
        <button id="maximize" onClick={maximizeWindow}>
          <Circle stroke={strokeColor} width={18} height={18} />
        </button>
        <button id="quit" onClick={closeWindow}>
          <Circle stroke={strokeColor} width={18} height={18} />
        </button>
      </span>
    </div>
  );
};

export default Titlebar;
