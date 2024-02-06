import Card from '../../../components/Card';
import racedata from '../../../constant/racedata';
import { memo } from 'react';
const Race = () => {
  return (
    <div className="race-container">
      <span>"back"</span>
      {racedata.map((race) => {
        return (
          <div key={race.id}>
            <Card {...race} />
          </div>
        );
      })}
    </div>
  );
};

export default memo(Race);
