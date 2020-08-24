import React from 'react';
import './CardInfo.css';

export default function CardInfo({ infoTitle, infoValue, infoUnit }) {
  return (
    <div className="cardInfo">
      <div className="cardInfo__title">{infoTitle}</div>
      <div className="cardInfo__Value">
        {infoValue} {infoUnit}
      </div>
    </div>
  );
}
