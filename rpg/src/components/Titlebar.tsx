import { ReactComponent as Min } from '../assets/icons/minimize-2.svg';
import { ReactComponent as Max } from '../assets/icons/maximize.svg';
import { ReactComponent as Close } from '../assets/icons/x-square.svg';

const Titlebar = () => {
  return (
    <div className="titlebar">
      <img src="./favicon-16x16.png" alt="logo" className="logo" />
      <p className="titlebar-heading">PUNK PROGRESS</p>
      <span className="titleBar-button">
        <button id="minimize">
          <Min stroke="yellow" width={18} height={18} />
        </button>
        <button id="maximize">
          <Max stroke="yellow" width={18} height={18} />
        </button>
        <button id="quit">
          <Close stroke="yellow" width={18} height={18} />
        </button>
      </span>
    </div>
  );
};

export default Titlebar;
