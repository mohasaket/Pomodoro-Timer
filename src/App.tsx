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
        <button
          onClick={handleStartTimer}
          className="fixed bottom-8 right-8 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Start Timer
        </button>
      )}
    </div>
  );
};

export default App;
