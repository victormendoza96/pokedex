import React from 'react';
import './InfoTag.css';

export default function InfoTag({ type }) {
  return (
    <div className="infoTag">
      <div className={`infoTag__logo ${type}`}>
        <img src={`/${type}.png`} alt="" />
      </div>
      <div className="infoTag__text">{type}</div>
    </div>
  );
}
