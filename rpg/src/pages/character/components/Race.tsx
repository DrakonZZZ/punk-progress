import Card from '../../../components/Card';
import racedata from '../../../constant/racedata';

const Race = () => {
  return (
    <div className="race-container">
      {racedata.map((race) => {
        const {
          id,
          race: raceName,
          species,
          skills,
          physicalAttributes,
        } = race;
        return (
          <Card
            id={id}
            raceName={raceName}
            species={species}
            skills={skills}
            physicalAttributes={physicalAttributes}
          />
        );
      })}
    </div>
  );
};

export default Race;
