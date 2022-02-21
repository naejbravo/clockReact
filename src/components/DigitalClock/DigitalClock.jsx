import React, { useState, useEffect } from "react";
import "./DigitalClock.scss";
export default function DigitalClock() {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="clock">
      <h2>{clockState}</h2>
    </div>
  );
}
