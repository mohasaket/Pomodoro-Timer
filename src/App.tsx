import React, { useState } from "react";
import PomodoroTimer from "./components/PomodoroTimer";
import WelcomePage from "./components/WelcomePage";
import "./index.css";

const App: React.FC = () => {
  const [showTimer, setShowTimer] = useState<boolean>(false);

  const handleStartTimer = () => {
    setShowTimer(true);
  };

  return (
    <div className="App font-custom ">
      {!showTimer ? <WelcomePage /> : <PomodoroTimer />}
      {!showTimer && (
        <div className=" fixed  w-full h-full flex text-center items-center justify-center ">
        <button
          onClick={handleStartTimer}
          className=" px-4 py-2 font-bold bg-[#ffcbcb] text-[#cb5b60] rounded top-20 left-20 right-20 bottom-20 fixed w-[200px] h-[48px]"
        >
   شروع زمان
        </button>
        </div>
      )}
    </div>
  );
};

export default App;
