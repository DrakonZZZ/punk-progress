interface StatProps {
  stat: [string, number];
}

const StatsCard = ({ stat }: StatProps) => {
  const [title, points] = stat;

  const isLowStat = title === 'Total' && points < 60;
  const isHighStat = title === 'Total' && points >= 75;

  return (
    <div
      className={`stats-card ${
        isLowStat ? 'stats-low ' : isHighStat ? 'stats-high' : ''
      }`}
    >
      <h3>{title}</h3>
      <p>{points} Points</p>
    </div>
  );
};

export default StatsCard;
