import React, { useState, useEffect } from "react";
import PomoTimer from '../assets/images/pomotimer.png';
const PomodoroTimer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<"work" | "break">("work");

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (mode === "work") {
              setMode("break");
              setMinutes(5);
              setSeconds(0);
            } else {
              setMode("work");
              setMinutes(25);
              setSeconds(0);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
    setMode("work");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        {mode === "work" ? "Work" : "Break"}
      </h1>
      <div className="reletive flex text-center items-center justify-center ">
      <img src={PomoTimer} alt="PomoTimer" className="w-[325px]" />
      <div className="text-6xl font-mono absolute mt-20 text-white ">
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div></div>
      <div className="mt-8">
        <button
          onClick={toggle}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
