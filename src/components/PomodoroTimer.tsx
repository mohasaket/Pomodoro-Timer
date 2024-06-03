import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import PomoTimer from '../assets/images/pomotimer.png';

const PomodoroTimer: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<"work" | "break">("work");

  const handleComplete = () => {
    if (mode === "work") {
      setMode("break");
      return { shouldRepeat: true, delay: 1 };
    } else {
      setMode("work");
      return { shouldRepeat: true, delay: 1 };
    }
  };

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setIsActive(false);
    setMode("work");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-10">
        {mode === "work" ? "انجام تسک" : "استراحت"}
      </h1>
      <div className="relative flex text-center items-center justify-center mb-10">
        <img src={PomoTimer} alt="PomoTimer" className="w-[250px]" />
        <div className="absolute flex items-center justify-center w-[250px] h-[250px]">
          
          <CountdownCircleTimer
       
            isPlaying={isActive}
            duration={mode === "work" ? 25* 60 : 5 * 60}
            colors={["#ff7c7a", "#be4e4e", "#803232", "#632525"]}
            colorsTime={[15 * 60, 10 * 60, 5 * 60, 0]}
            onComplete={handleComplete}
            size={300}  // Set the size of the timer here
          >
            {({ remainingTime }) => {
              const minutes = Math.floor(remainingTime / 60);
              const seconds = remainingTime % 60;
              return (
                <div className="text-6xl font-mono text-white ">
                  {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </div>
              );
            }}
          </CountdownCircleTimer>
        </div>
      </div>
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
