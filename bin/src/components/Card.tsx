import { usePlayerContext } from '../context/playerContext';

interface CardProps {
  id: number;
  raceName: string;
  backstory: string;
  physicalAttributes: string;
  skills: string;
  additionalInfo: string;
}

const Card = (param: CardProps) => {
  const { selectedRace, setSelectedRace } = usePlayerContext();

  const selectedId = selectedRace.id === param.id;
  return (
    <div
      className={`card inset-shadow ${
        selectedId && 'card-active inset-shadow-active'
      }`}
      onClick={() => setSelectedRace(param)}
    >
      <h3>{param.raceName}</h3>
      <p className="regular-paragraph">{param.additionalInfo}</p>
      {selectedId && (
        <div style={{ fontSize: '10px', marginTop: '1rem' }}>
          Skills: {param.skills}
        </div>
      )}
    </div>
  );
};

export default Card;
