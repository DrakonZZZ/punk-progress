interface StatProps {
  stat: [string, number];
}

const StatsCard = ({ stat }: StatProps) => {
  const [title, points] = stat;
  return (
    <div className={`stats-card ${title === 'Total' ? 'total-card' : ''}`}>
      <h3>{title}</h3>
      <p>{points} Points</p>
    </div>
  );
};

export default StatsCard;
