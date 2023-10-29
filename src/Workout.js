import React from "react";
import { useState, useRef } from "react";

export default function Workout({ title, description, time, onComplete }) {
  const timer = React.useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStartWorkout() {
    // Todo: Start timer
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      handleStopWorkout();
    }, time);
    setTimerStarted(true);
    console.log("start time = " + time);
  }

  function handleStopWorkout() {
    // Todo: Stop timer
    clearTimeout(timer.current);
    onComplete();
    console.log("stop time = " + time + " timerExpired = " + timerExpired);
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      {timerExpired && <p>The timer expired</p>}
      <p>{description}</p>
      <p>Time limit: {time / 1000} seconds</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
