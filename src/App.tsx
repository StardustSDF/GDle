import React, { useState, useMemo } from 'react';
import GDLE from './GDLE';
import { levelNames, levelStats, Level } from './functions';
import LevelCard from './theFourHorsemenOfHTML/LevelCard'

const App: React.FC = () => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);

const answer = useMemo(() => levelNames[Math.floor(Math.random() * levelNames.length)], []);

  const handleGuess = () => {
    if (currentGuess) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess(""); // Clear input after each guess
    }
  };
  console.log(answer)

  return (
    <div>
      <input
        type="text"
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value)}
        placeholder="Enter level name"
      />
      <button onClick={handleGuess}>Submit Guess</button>

      {/* Render a GDLE component for each guess */}
      {guesses.slice().reverse().map((guess, index) => (
        <GDLE key={guess} answer={answer} guess={guess} />
      ))}
    </div>
  );
  return (
    <div>
      <LevelCard/>
    </div>
  );
};

export default App;
