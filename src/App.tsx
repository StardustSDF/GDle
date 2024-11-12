import React, { useState, useMemo, useEffect } from 'react';
import GDLE from './GDLE';
import LevelCard from './theFourHorsemenOfHTML/LevelCard'
import RC from './theFourHorsemenOfHTML/RC';
import Move from './theFourHorsemenOfHTML/Move';
import Container from './theFourHorsemenOfHTML/Container';
import Text from './theFourHorsemenOfHTML/Text';
import Drawer from './theFourHorsemenOfHTML/Drawer';

import allLevelsPromise from './levels/data'
const App: React.FC = () => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allLevels, setAllLevels] = useState({})
  const [levelNames, setLevelNames] = useState<string[]>([]);
  const [answer, setAnswer] = useState("")
  const [suggestion, setSuggestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [viewLevels, setViewLevels] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Google Form submission URL with the unique field name (replace with your own)
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSelKrcWpfJM67RUE7sWWux7zyn2lv3UrxtqDjyCmV7BhNWrtg/formResponse?entry.103567287=${encodeURIComponent(suggestion)}`;

    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors', // prevents CORS errors
    })
    .then(() => setSubmitted(true))
    .catch((error) => console.error("Error submitting suggestion:", error));
    setSuggestion(''); // clear input field after submission
    };
  
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/allLevels.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch levels data");
        }
        return response.json();
      })
      .then((data) => {
        setAllLevels(data);
        const names = Object.keys(data).map(name => name.toLowerCase());
        setLevelNames(names);
        setAnswer(names[Math.floor(Math.random() * names.length)]);
        setIsLoaded(true);
        (globalThis as any).allLevels = data; // Expose allLevels to the global scope
      })
      .catch((error) => console.error("Error loading levels data:", error));
  }, []);
// useEffect(() => {
//   allLevelsPromise
//     .then((data) => {
//       console.log("Fetched data:", data); // Debugging line to see what's fetched
//       setAllLevels(data);
//       const names = Object.keys(data).map((name) => name.toLowerCase());
//       setLevelNames(names);
//       setAnswer(names[Math.floor(Math.random() * names.length)]);
//       setIsLoaded(true);
//       (globalThis as any).allLevels = data; // Expose allLevels to the global scope
//     })
//     .catch((error) => console.error("Error loading levels data:", error));
// }, []);
  let guessWhenEnter: any = []
  const handleGuess = () => {
    if (currentGuess && (guessWhenEnter[0] && guesses.indexOf(guessWhenEnter[0].toLowerCase()) === -1) || levelNames.indexOf(currentGuess.toLowerCase()) !== -1 && guesses.indexOf(currentGuess.toLowerCase()) === -1) {
      setGuesses([...guesses, guessWhenEnter[0] || currentGuess.toLowerCase()])
      setCurrentGuess("")
    }
  };
  const levelView = () => {
    setViewLevels(!viewLevels)
  }
  console.log(answer)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0].clientX < 20) {
      setIsDrawerOpen(true);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  };

  return isLoaded ? (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Container>
          Menu
        </Container>
      </Drawer>
      <RC row> <Move moveRight={isDrawerOpen ? "250px" : 0}> <Container> <RC column>
        <RC row>
      <input
        type="text"
        value={currentGuess}
        onChange={(e) => {
          guessWhenEnter = []
          setCurrentGuess(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleGuess();
          }
        }}
        placeholder="Enter level name"
        disabled={!isLoaded}
      />
      <button onClick={handleGuess} disabled={!isLoaded}>Submit Guess</button>
      <button onClick={levelView} disabled={!isLoaded}>View All Levels</button>
      GDle beta v2.1.1 Reload to play again
      </RC>
      <RC row>
        <Container width={250} height={100}>
          <RC column>
            {levelNames.slice().sort((a, b) => a.localeCompare(b)).map((name) => (
              <div key={name}>
                {currentGuess && guesses.indexOf(name) === -1 && name.match(new RegExp(`^${currentGuess.replace("\\", ' ').replace(".", ' ').replace("^", ' ').replace("(", ' ').replace(")", ' ').replace("[", ' ').replace("]", ' ')}`, 'i')) && guessWhenEnter.push(name) && name}  
              </div>
            ))}
          </RC>
        </Container>
        <Container width={900}>
        <RC column>
          {viewLevels ? 
          levelNames.slice().sort((a, b) => a.localeCompare(b)).map((guess, index) => (
            <GDLE key={guess} answer={guess} guess={guess} allLevels={allLevels} lightBrown={index % 2 !== 0} />
          ))
          :
          guesses.slice().reverse().map((guess, index) => (
            <GDLE key={guess} answer={answer} guess={guess} allLevels={allLevels} lightBrown={index % 2 !== 0} />
          ))}
        </RC>
        </Container>
        <RC column>
        <Container>
          <RC column>
                        <h3>GOT SUGGESTIONS?</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="type them here! no limit"
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    required
                />
                <button type="submit">Submit Suggestion</button>
            </form>
            {submitted && <p>Thank you for your suggestion!</p>}
            <h3>HOW TO PLAY</h3> <br />
            Type a level name <br />
            in the top left corner <br />
            then press Enter. <br />
            <br />
            The colors of the text <br />
            will describe the difference <br />
            between your level's stats <br />
            and a target level. <br />
            You win when you guess a level <br />
            Without any red/orange text.
            <br />
            Hover over a level's <br />
            element for more info
            <br /> 
            <br />
          </RC>
        </Container>
       <Container>
        <RC column>
  GDle game created by: <br />
  Discord: stardustgd <br />
  GitHub: StardustSDF <br />
  Reddit: u/StardustSDF <br />
  <br />
  With help from: <br />
  Discord: thetrash_man <br />
  <br />
  Huge thanks to&nbsp;
  <a
    href="https://x.com/TheRealGDColon"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "underline", color: "blue" }}
  >
    GD Colon
  </a>
  <br />
  For making&nbsp;
  <a
    href="https://gdcolon.com/gdsave/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "underline", color: "blue" }}
  >
    GD save explorer
  </a>
  <br />
  And&nbsp;
  <a
    href="https://gdbrowser.com/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "underline", color: "blue" }}
  >
    GD browser
  </a>
  <br />
  both of which I used <br />
  to get level data <br />
  <br />
  All other copyright <br />
  goes to:&nbsp;
  <a
    href="https://robtopgames.com/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "underline", color: "blue" }}
  >
    RobTop Games
  </a>
  </RC>
</Container>
        <div>
          <br />
            Known issues: <br />
            Star rate (feature, epic, etc.), <br />
            and the buttons next to creator name <br />
            not currently supported. <br />
            Creo - Crazy is blue <br />
            No picture for the inspired theme <br />
            Difficulty face sizes <br />
            Mobile version of the game <br />
            is a bit scuffed
        </div>
        </RC>
      </RC>
      </RC></Container></Move></RC>
    </div>
    
  ) : (
    <div>Loading...</div>
  )

  return (
    <div>
      <LevelCard data={[]}/>
    </div>
  );
};

export default App;