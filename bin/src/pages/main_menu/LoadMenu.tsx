import './styles/load-styles.css';
import { Link } from 'react-router-dom';
import loadImage from '../../assets/load-menu/load-image.png';
import defaultImage from '../../assets/load-menu/default-picture.png';

const LoadMenu = () => {
  const loadProfile = [
    {
      id: 1,
      saveTime: '10/2/2023',
      loadName: 'Drak',
      loadImg: loadImage,
    },
    {
      id: 2,
      saveTime: '11/3/2023',
      loadName: 'Gandalf',
      loadImg: defaultImage,
    },
    {
      id: 3,
      saveTime: '12/4/2023',
      loadName: 'Frodo',
      loadImg: defaultImage,
    },
    {
      id: 4,
      saveTime: '1/5/2023',
      loadName: 'Aragorn',
      loadImg: defaultImage,
    },
  ];

  return (
    <main className="load-menu-container">
      <div>
        <Link to="/">BACK</Link>
        <div className="load-cards">
          {loadProfile.map((item, idx) => {
            return (
              <div key={idx} className="card">
                <div className="load-details">
                  <span>{item.loadName}</span>
                  <span>{item.saveTime}</span>
                </div>
                <div className="load-img">
                  <img src={item.loadImg} className="loading-picture" alt="l" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default LoadMenu;
