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
        <div className="butty">
        <button
          onClick={handleStartTimer}
          className="  px-4 py-2 font-bold bg-[#ffcbcb] text-[#cb5b60] rounded w-[200px] h-[48px]"
        >
   شروع زمان
        </button>
        </div>
      )}
    </div>
  );
};

export default App;
