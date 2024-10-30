import React, { useEffect, useState } from "react";
import { levelStats, levelNames, compare, getColor, getPicture } from './functions' 
import Container from './theFourHorsemenOfHTML/Container'
import Move from './theFourHorsemenOfHTML/Move'
import RC from './theFourHorsemenOfHTML/RC'
import Text from './theFourHorsemenOfHTML/Text'
import Picture from './theFourHorsemenOfHTML/Picture'
import GDleSquare from "./theFourHorsemenOfHTML/GDleSquare";
import { get } from "http";

const print = console.log;
        // do ctrl + z after you paste
        //i see now
        // its formatting when you paste but it doesn't know that nesting cases in a switch is dumb as hell
        


        // go to functions.ts
        // so that we can work in a separate file. I need to clean up my codebase. except for these lovely comments of course. i'm a good programmer i swear! i just write dumbass comments
      // you work on levels, i'm gonna work on making it so you can see all your guesses. might even add pictures for each level and modifier.
      //alright, picture could take a bit tho
      // yeah ill probably get to it eventually, for now i just wanna make sure it's possible to see your past guesses and colors

    
      // yo how hard is the theme one now

      //it really isnt hard, i think im just ober thinking it  
      // nah, I think that we just have enough categories now to describe the decoration for almost any level
      //what about one with flashy shit, like killbot. the answer is strobe
      
      //if i see any that confuse me or dont have a theme ill ask you about it
      // if theres a level that you just want to describe the decoration as the levels color cuz thats all it feels like the deco is, then thats allowed
      //we gunna keep these comments or...?
      //honestly i think they'll just be like an easter egg if anyone looks at the code
      //yeah, and its kinda cool to look back at like past shit
      // yeah and also, uh... i forgot what i was gonna say cuz im too high
      //based
      // wait i remember, i was gonna say that we should leave our signatures here, since people will interpret this as the developers being self counscious thread
      //so like but our internet names before each comment?
      
      // no just leave your signature in a comment below vvv
      // i said below dumbass
      //dude what give example
      
      //--trashmann
/* 
  .. --GitHub: StardustSDF
  .. --Discord: stardustgd
*/
      // decorate yours however you like
      //i just like 'trashmann'
      //that under all comments or just like the comment block
      // nah they can just figure out who's who. i'm the one thats writing the code, you're the one thats just here to help add levels. and comic relief.
      //hell yeah
      // so basically trashmann will be the dumbass that doesnt know what hes doing, and i'll be the one helping him
      //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      
// template (paste everything from the whitespace before case, and delete all whitespace on the line before pasting)
//dude i dont know why but copy paste just dont seem to fuckin work
//yeah thats what im doi
//how are you meant to get rid of that whispac wthouong back to the last line
//ctrl z dont even work for me bruh. just do it. well i guess i did it for you
// ask chatgpt how to make it so you can ctrl z. got it
// whuy the fuck doesnt it elt you by default
//i unno man, shit was already bound. just wasnt letting me for some shitass reason

// DECO THEMES: hell, modern, glow, generic, nine circles, effect, inspired, overdecorated, dynamic, 1.9, 2.2, strobe, color, movie, other

const messageToJayden = "ur gay";
//1984
/*
used to be the compare function here
*/
// if guess is equal to answer, it returns true, otherwise it returns false
//yeah thats kinda what i was guessing 
// it looks complicated because I save lines by making this function also format its response
// it just returns the type in upper case if its the same, followed by your guess's type
// which lets me save even more lines because to check what color the square should be, it just checks if the first letter is capital.
// I try to be as consice as possible, even though it just makes my code harder to understand
// i dont care

const GDLE: React.FC<{ answer: any; guess: any }> = ({ answer, guess }) => {
  const [stars, setStars] = useState<any>([]);
  const [difficulty, setDifficulty] = useState<any>([]);
  const [rate, setRate] = useState<any>([]);
  const [coins, setCoins] = useState<any>([]);
  const [length, setLength] = useState<any>([]);
  const [objects, setObjects] = useState<any>([]);
  const [updateVersion, setUpdateVersion] = useState<any>([]);
  const [song, setSong] = useState<any>([]);
  const [theme, setTheme] = useState<any>([]);
  const [gamemodes, setGamemodes] = useState<any>([]);
  const originalGuess = guess
  const originalAnswer = answer
  let Stars, Difficulty, Rate, Coins, Length, Objects, UpdateVersion, Song, Theme, Gamemodes

  useEffect(() => {
    gdle(guess, answer);
  }, []);

  function gdle(guessedLevel: any, answer: any) {
  print(originalGuess)
  guessedLevel = levelStats(String(guessedLevel).toLowerCase())
  answer = levelStats(answer)
  
  print(guessedLevel)
  if (!guessedLevel || !guessedLevel.gamemodes) {
    setStars("Invalid level");
    setDifficulty("");
    setRate("");
    setCoins("");
    setLength("");
    setObjects("");
    setUpdateVersion("");
    setSong("");
    setTheme("");
    setGamemodes("");
    return;
  }
  setStars(compare(answer, guessedLevel, "stars"));
  setDifficulty(compare(answer, guessedLevel, "difficulty"));
  setRate(compare(answer, guessedLevel, "rate"));
  setCoins(compare(answer, guessedLevel, "coins"));
  setLength(compare(answer, guessedLevel, "length"));
  setObjects(compare(answer, guessedLevel, "objects"));
  setUpdateVersion(compare(answer, guessedLevel, "update"));
  setSong(compare(answer, guessedLevel, "song"));
  setTheme(compare(answer, guessedLevel, "theme"));
  setGamemodes(compare(answer, guessedLevel, "gamemodes"));
}

  return (
    <RC row gap="10px">
      {/* <Container outlineTransparent width={120} height={100}>
        <Text outlineTransparent fontFamily="serif" fontSize={17}>
          {starsReg ? "🟩" : "🟥"} {starsReg || "stars".replace(/,/g, '')}
        </Text>
      </Container> */}
      <Container outlineTransparent width={120} height={100}>
        <GDleSquare type={stars[0]} guess={stars[1]} color={stars[2]} picture={stars[3]}/>
      </Container>
      <Container outlineTransparent width={120} height={100}>
        <GDleSquare type={difficulty[0]} guess={difficulty[1]} color={difficulty[2]} picture={difficulty[3]}/>
      </Container>
      <Container outlineTransparent width={120} height={100}>
        <GDleSquare type={rate[0]} guess={rate[1]} color={rate[2]} picture={rate[3]}/>
      </Container>
      <Container outlineTransparent width={120} height={100}>
        <GDleSquare type={coins[0]} guess={coins[1]} color={coins[2]} picture={coins[3]}/>
      </Container>
      <Container outlineTransparent width={120} height={100}>
        <GDleSquare type={length[0]} guess={length[1]} color={length[2]} picture={length[3]}/>
      </Container>
      <Container outlineTransparent width={120} height={100}>
        <GDleSquare type={objects[0]} guess={objects[1]} color={objects[2]} picture={objects[3]}/>
      </Container>
      <Container outlineTransparent width={120} height={100}>
        <GDleSquare type={updateVersion[0]} guess={updateVersion[1]} color={updateVersion[2]} picture={updateVersion[3]}/>
      </Container>
      <Container outlineTransparent width={120} height={100}>
        <GDleSquare type={song[0]} guess={song[1]} color={song[2]} picture={song[3]}/>
      </Container>
      <Container outlineTransparent width={120} height={100}>
        <GDleSquare type={theme[0]} guess={theme[1]} color={theme[2]} picture={theme[3]}/>
      </Container>
      <Container outlineTransparent width={120} height={100}>
        <GDleSquare type={gamemodes[0]} guess={gamemodes[1]} color={gamemodes[2]} picture={gamemodes[3]}/>
      </Container>
      <RC column gap="0">
      <Text outlineTransparent fontSize={20} containerHeight={120} moveDown="80px">{originalGuess}</Text>
      <Text outlineTransparent containerHeight={120} horizontalAlign="left">{originalGuess === originalAnswer ? "🟩" : "🟥"}</Text>
      </RC>





      {/* <Container outlineTransparent width={120} height={100}><Text outlineTransparent fontFamily="serif" fontSize={17}>{difficulty.match(/^[A-Z]/) ? "🟩" : "🟥"} {difficulty || "difficulty"}</Text></Container>
      <Container outlineTransparent width={120} height={100}><Text outlineTransparent fontFamily="serif" fontSize={17}>{rate.match(/^[A-Z]/) ? "🟩" : "🟥"} {rate || "rate"}</Text></Container>
      <Container outlineTransparent width={120} height={100}><Text outlineTransparent fontFamily="serif" fontSize={17}>{coins.match(/^[A-Z]/) ? "🟩" : "🟥"} {coins || "coins"}</Text></Container>
      <Container outlineTransparent width={120} height={100}><Text outlineTransparent fontFamily="serif" fontSize={17}>{length.match(/^[A-Z]/) ? "🟩" : "🟥"} {length || "length"}</Text></Container>
      <Container outlineTransparent width={120} height={100}><Text outlineTransparent fontFamily="serif" fontSize={17}>{objects.match(/^[A-Z]/) ? "🟩" : "🟥"} {objects || "high object count"}</Text></Container>
      <Container outlineTransparent width={120} height={100}><Text outlineTransparent fontFamily="serif" fontSize={17}>{updateVersion.match(/^[A-Z]/) ? "🟩" : "🟥"} {updateVersion || "update version"}</Text></Container>
      <Container outlineTransparent width={120} height={100}><Text outlineTransparent fontFamily="serif" fontSize={17}>{song.match(/^[A-Z]/) ? "🟩" : "🟥"} {song || "song type"}</Text></Container>
      <Container outlineTransparent width={120} height={100}><Text outlineTransparent fontFamily="serif" fontSize={17}>{theme.match(/^[A-Z]/) ? "🟩" : "🟥"} {theme || "theme"}</Text></Container>
      <Container outlineTransparent width={150} height={200}><Text outlineTransparent fontFamily="serif" fontSize={17}>{gamemodes.match(/^[A-Z]/) ? "🟩" : !gamemodes.match(/\d\//) && gamemodes ? "🟨" : "🟥"} {gamemodes || "gamemodes"}</Text></Container>
      <Container outlineTransparent width={150} height={200}><Text outlineTransparent fontFamily="serif" fontSize={25}>{originalGuess}{originalGuess === answer ? "🟩" : "🟥"}</Text></Container> */}
    </RC>
  );
};

export default GDLE;
