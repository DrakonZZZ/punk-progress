interface CardProps {
  id: number;
  raceName: string;
  skills: string;
  physicalAttributes: string;
}

const Card = (param: CardProps) => {
  return (
    <div className="card">
      <h3>{param.raceName}</h3>
      <p>{param.skills}</p>
    </div>
  );
};

export default Card;
