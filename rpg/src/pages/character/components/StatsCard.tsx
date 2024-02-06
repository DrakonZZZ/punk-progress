interface StatProps {
  stat: [string, number];
}

const StatsCard = ({ stat }: StatProps) => {
  const [title, points] = stat;

  const isLowStat = title === 'Total' && points < 54;
  const isHighStat = title === 'Total' && points >= 86;

  return (
    <div
      className={`stats-card inset-shadow ${
        isLowStat ? 'stats-low' : isHighStat ? 'stats-high' : ''
      } ${title === 'Total' && 'total-card'}`}
    >
      <h3>{title}</h3>
      <p>{points} Points</p>
      {isLowStat && (
        <div style={{ fontSize: '12px' }}>Don't be a masochist</div>
      )}
      {isHighStat && (
        <div style={{ fontSize: '12px' }}>Blaze through like a champ</div>
      )}
    </div>
  );
};

export default StatsCard;
