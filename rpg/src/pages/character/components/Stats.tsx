import StatsCard from './StatsCard';
import { usePlayerContext } from '../../../context/playerContext';

export const Stats = () => {
  const { charStats, setCharacterStats } = usePlayerContext();

  const statsArray = Object.entries(charStats);

  const generateRandomStats = () => {
    // range: 5 to 10
    const Strength = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    const Agility = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    const Intelligence = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    const Charisma = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    const Dexterity = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    const Luck = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    const Vitality = Math.floor(Math.random() * (15 - 5 + 1)) + 5;

    const Total =
      Strength +
      Agility +
      Intelligence +
      Charisma +
      Dexterity +
      Luck +
      Vitality;

    setCharacterStats({
      Strength,
      Agility,
      Intelligence,
      Charisma,
      Dexterity,
      Luck,
      Vitality,
      Total,
    });
  };

  return (
    <div className="stats-container">
      <div className="stats-points">
        <h2>Stats</h2>
        <div className="stats-grid">
          {statsArray.map((stat, idx) => {
            return <StatsCard key={idx} stat={stat} />;
          })}
        </div>
      </div>
      <button className="char-button stat-button" onClick={generateRandomStats}>
        Generate
      </button>
    </div>
  );
};
