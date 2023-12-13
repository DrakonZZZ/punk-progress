interface CardProps {
  id: number;
  raceName: string;
  species: string;
  skills: string;
  physicalAttributes: string;
}

const Card = (param: CardProps) => {
  return <div className="card">Card</div>;
};

export default Card;
