import React from 'react';
import './ListOfTags.css';
export default function ListOfTags({ header, items }) {
  return (
    <div className="listOfTags">
      <div className="listOfTags__header">{header}</div>
      {items.map(item => (
        <div key={item.ability.name} className="listOfTags__tag">
          {item.ability.name}
        </div>
      ))}
    </div>
  );
}
