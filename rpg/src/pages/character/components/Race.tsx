import Card from '../../../components/Card';
import racedata from '../../../constant/racedata';
import { memo } from 'react';
const Race = () => {
  console.log('render');
  return (
    <div className="race-container">
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
