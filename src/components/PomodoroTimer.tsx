import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import PomoTimer from "../assets/images/pomotimer.png";
import styled, { keyframes } from "styled-components";

// Define keyframes for animations
const jittery = keyframes`
  5%, 50% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  15% {
    transform: scale(1.15);
  }
  20% {
    transform: scale(1.15) rotate(-5deg);
  }
  25% {
    transform: scale(1.15) rotate(5deg);
  }
  30% {
    transform: scale(1.15) rotate(-3deg);
  }
  35% {
    transform: scale(1.15) rotate(2deg);
  }
  40% {
    transform: scale(1.15) rotate(0);
  }
`;

const heartbeat = keyframes`
  50% {
    transform: scale(1.1);
  }
`;

// Styled-components
const MainContent = styled.div``;

const Item = styled.div<{ bgColor: string }>`
  background: ${({ bgColor }) => bgColor};
`;

const Button = styled.button`
  background: #f1c40f;
  color: #fff;
  border: 3px solid #fff;
  border-radius: 50px;
  padding: 0.8rem 2rem;
  font: 24px "Margarine", sans-serif;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: 0.2s ease-in-out;
  letter-spacing: 2px;
`;
const Button1 = styled.button`
  background: #f83a00;
  color: #fff;
  border: 3px solid #fff;
  border-radius: 50px;
  padding: 0.8rem 2rem;
  font: 24px "Margarine", sans-serif;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: 0.2s ease-in-out;
  letter-spacing: 2px;
`;

const JitteryButton = styled(Button)`
  animation: ${jittery} 4s infinite;

  &:hover {
    animation: ${heartbeat} 0.2s infinite;
  }
`;
const ResetButton = styled(Button1)`
  animation: ${jittery} 4s infinite;

  &:hover {
    animation: ${heartbeat} 0.2s infinite;
  }
`;
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
            duration={mode === "work" ? 25 * 60 : 5 * 60}
            colors={["#ff7c7a", "#be4e4e", "#803232", "#632525"]}
            colorsTime={[15 * 60, 10 * 60, 5 * 60, 0]}
            onComplete={handleComplete}
            size={300} // Set the size of the timer here
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
      <div className="mt-8 ">

        <MainContent>
          <div className="flex justify-between w-[300px] ">
          <ResetButton>
            <div  onClick={reset}> Reset</div>
          </ResetButton>
          <JitteryButton>
            <div onClick={toggle}>{isActive ? "Pause" : "Start"}</div>
          </JitteryButton></div>
        </MainContent>
      </div>
    </div>
  );
};

export default PomodoroTimer;
