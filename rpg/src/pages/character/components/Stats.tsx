import { useState } from 'react';
import StatsCard from './StatsCard';

interface CharacterStats {
  Strength: number;
  Agility: number;
  Intelligence: number;
  Charisma: number;
  Dexterity: number;
  Luck: number;
  Vitality: number;
  Total: number;
}

export const Stats = () => {
  const [charStats, setCharacterStats] = useState<CharacterStats>({
    Strength: 0,
    Agility: 0,
    Intelligence: 0,
    Charisma: 0,
    Dexterity: 0,
    Luck: 0,
    Vitality: 0,
    Total: 0,
  });

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
      <button className="char-button" onClick={generateRandomStats}>
        Generate
      </button>
    </div>
  );
};
