import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function PokeChart({ stats = [] } = {}) {
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num);
  };

  const statsPok = stats.map(statPok => {
    const obj = { name: truncateString(statPok.stat.name, 11), value: statPok.base_stat };
    return obj;
  });

  return (
    <ResponsiveContainer height={300}>
      <RadarChart outerRadius="60%" width={300} height={300} data={statsPok}>
        <PolarGrid stroke="#a183da" fill="#999" />
        <PolarAngleAxis dataKey="name" stroke="#00000096"></PolarAngleAxis>
        <PolarRadiusAxis stroke="#00000047" />
        <Radar name="Stats" dataKey="value" stroke="#1a1a1a" fill="#a183da" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
