import Card from '../../../components/Card';
import racedata from '../../../constant/racedata';
import { usePlayerContext } from '../../../context/playerContext';

const Race = () => {
  const { selectedRace, setSelectedRace } = usePlayerContext();

  console.log(selectedRace);
  return (
    <div className="race-container">
      {racedata.map((race) => {
        const {
          id,
          raceName,
          backstory,
          skills,
          physicalAttributes,
          additionalInfo,
        } = race;
        return (
          <div key={id} onClick={() => setSelectedRace(race)}>
            <Card
              id={id}
              backstory={backstory}
              raceName={raceName}
              skills={skills}
              physicalAttributes={physicalAttributes}
              additionalInfo={additionalInfo}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Race;
