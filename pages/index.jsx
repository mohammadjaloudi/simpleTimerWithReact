import React, { useState, useEffect } from "react";
import TimerButton from "../src/components/TimerButton";

const Timer = () => {
  const [mins, setMins] = useState(25);
  const [secs, setSecs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && !isPaused) {
      intervalId = setInterval(() => {
        if (secs > 0) {
          setSecs(secs - 1);
        } else {
          if (mins > 0) {
            setMins(mins - 1);
            setSecs(59);
          }
        }
      }, 1000);
    }

    if (mins === 0 && secs === 0) {
      new Audio("./assets/sound.mp3").play();
    }

    return () => clearInterval(intervalId);
  }, [isRunning, isPaused, secs, mins]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setMins(25);
    setSecs(0);
  };

  const incrementMins = () => {
    if (!isRunning) {
      setMins(mins + 1);
    }
  };

  const decrementMins = () => {
    if (mins > 0 && !isRunning) {
      setMins(mins - 1);
    }
  };

  return (
    <div className="container">
      <h1 className="titleTextDT">Digital Timer</h1>
      <div className="box">
        <div className="btns">
          <TimerButton onClick={handleStart} className="btn1">
            Start
          </TimerButton>
          <TimerButton onClick={handleReset} className="btn2">
            Reset
          </TimerButton>
          <h4 style={{ marginLeft: 55 }}>Set Timer Limit</h4>
          <div className="container1">
            <button
              onClick={decrementMins}
              className="decBtn"
              disabled={isRunning}
            >
              -
            </button>
            <h3 className="timeLine">{mins}</h3>
            <button
              onClick={incrementMins}
              className="incBtn"
              disabled={isRunning}
            >
              +
            </button>
          </div>
        </div>
        <div className="take">
          <h1 className="Text">{`${mins}:${secs < 10 ? "0" + secs : secs}`}</h1>
          <TimerButton
            onClick={() => setIsPaused((prev) => !prev)}
            className="btn3"
          >
            {isPaused ? "Resume" : "Pause"}
          </TimerButton>
        </div>
      </div>
    </div>
  );
};

export default Timer;
