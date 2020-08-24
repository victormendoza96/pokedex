import React, { useState } from 'react';

export default function Clock() {
  var now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const [time, setTime] = useState(now);

  const ubdatetime = () => {
    now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setTime(now);
  };

  setInterval(() => {
    ubdatetime();
  }, 1000);

  return <p>{time}</p>;
}
