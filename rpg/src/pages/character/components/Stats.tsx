import StatsCard from './StatsCard';
import { usePlayerContext } from '../../../context/playerContext';
import { useState, useMemo, useCallback } from 'react';
import { CharacterStats } from '../../../types/player.types';

export const Stats = () => {
  const { charStats, setCharacterStats } = usePlayerContext();
  const [total, setTotal] = useState<number>(0);

  const generateRandomStats = useCallback(() => {
    const randomGen = () => Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    const stats: (keyof CharacterStats)[] = [
      'Strength',
      'Agility',
      'Intelligence',
      'Charisma',
      'Dexterity',
      'Luck',
      'Vitality',
    ];
    const newStats: Partial<CharacterStats> = {};
    let total = 0;

    stats.forEach((stat) => {
      const value = randomGen();
      newStats[stat] = value as number;
      total += value;
    });

    newStats['Total'] = total as number;
    setCharacterStats(newStats as CharacterStats);
    setTotal(total);
  }, [setCharacterStats]);

  const statsArray = useMemo(() => Object.entries(charStats), [charStats]);
  return (
    <div className="stats-container">
      <div className="stats-points">
        <h2>Stats</h2>
        <div className="stats-grid">
          {statsArray.map((stat, idx) => (
            <StatsCard key={idx} stat={stat} />
          ))}
        </div>
      </div>
      <button className="char-button stat-button" onClick={generateRandomStats}>
        ROLL
      </button>
    </div>
  );
};
