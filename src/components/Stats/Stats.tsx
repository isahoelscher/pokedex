import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import "./Stats.scss"


interface Stats {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface Props {
  stats: Stats[];
}

const Stats: React.FC<Props> = ({ stats }) => {
  const getBaseStatByName = (name: string): number => {
    const foundStat = stats.find(stat => stat.stat.name === name);
    return foundStat ? foundStat.base_stat : 0;
  };

  return (
    <div className="stats-container">
      <div className="stats-name-column">
        <div className="stats-name">
          <p>HP</p>
          <p>ATK</p>
          <p>DEF</p>
          <p>SATK</p>
          <p>SDEF</p>
          <p>SPD</p>
        </div>
      </div>
      <div className="stats-column">
        <ProgressBar completed={getBaseStatByName('hp')} bgColor="#d11b1c" height="13px" labelAlignment="left" labelColor="#000" labelSize="10px" />
        <ProgressBar completed={getBaseStatByName('attack')} bgColor="#d11b1c" height="13px" labelAlignment="left" labelColor="#000" labelSize="10px" />
        <ProgressBar completed={getBaseStatByName('defense')} bgColor="#d11b1c" height="13px" labelAlignment="left" labelColor="#000" labelSize="10px" />
        <ProgressBar completed={getBaseStatByName('special-attack')} bgColor="#d11b1c" height="13px" labelAlignment="left" labelColor="#000" labelSize="10px" />
        <ProgressBar completed={getBaseStatByName('special-defense')} bgColor="#d11b1c" height="13px" labelAlignment="left" labelColor="#000" labelSize="10px" />
        <ProgressBar completed={getBaseStatByName('speed')} bgColor="#d11b1c" height="13px" labelAlignment="left" labelColor="#000" labelSize="10px" />
      </div>
    </div>
  );
};

export default Stats;
