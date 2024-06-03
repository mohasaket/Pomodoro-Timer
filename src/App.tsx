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
    <div className="App">
      {!showTimer ? <WelcomePage /> : <PomodoroTimer />}
      {!showTimer && (
        <div className="fixed bottom-14 flex justify-center  item-center text-center w-full">
        <button
          onClick={handleStartTimer}
          className=" px-4 py-2 bg-[#ffcbcb] text-[#cb5b60] rounded"
        >
          Start Timer
        </button>
        </div>
      )}
    </div>
  );
};

export default App;
