import Card from '../../../components/Card';
import racedata from '../../../constant/racedata';

const Race = () => {
  return (
    <div className="race-container">
      {racedata.map((race) => {
        const { id, race: raceName, skills, physicalAttributes } = race;
        return (
          <Card
            key={id}
            id={id}
            raceName={raceName}
            skills={skills}
            physicalAttributes={physicalAttributes}
          />
        );
      })}
    </div>
  );
};

export default Race;
