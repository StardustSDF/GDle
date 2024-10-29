import React, { useEffect, useState } from "react";
import { levelStats, levelNames, compare, getColor, getPicture } from '../functions' 
import Container from './Container'
import Move from './Move'
import RC from './RC'
import Text from './Text'
import Picture from './Picture'
import GDleSquare from "./GDleSquare";

const print = console.log;

const LevelCard: React.FC = () => {
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
  let Stars, Difficulty, Rate, Coins, Length, Objects, UpdateVersion, Song, Theme, Gamemodes

  useEffect(() => {
  }, []);

  function gdle(guessedLevel: any, answer: any) {
  guessedLevel = levelStats(guessedLevel)
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
  setGamemodes(compare(answer, guessedLevel, "song"));

}

  return (
    <Container width={800} height={200}>
        <RC row>
            <Container width={10} height={200}/>
            <RC column>
                <Container height={30} width={100}/>
                <Picture width="100px" containerWidth="100px" src="/assets/difficulty/extreme demon.png"/>
                <Text containerWidth={100} containerHeight={40} horizontalAlign="center">Demon</Text>
                <RC row><Text containerWidth={50} containerHeight={30} horizontalAlign="right" verticalAlign="middle">10</Text>
                <Container width={10}/>
                <Picture height="30px" containerHeight="30px" width="30px" containerWidth="30px" src="/assets/stars/1.png"/>
                <Container width={10}/>
                </RC>
            </RC>
            <Container width={10} height={200}/>

            <RC column>
                <RC row>
                    <Text fontSize={40} lineHeight={0.1} containerWidth={500} containerHeight={60}> Kenos </Text>
                </RC>
                <RC row>
                    <Picture src="/assets/gamemodes/"/>
                </RC>
            </RC>
        </RC>
    </Container>
  );
};

export default LevelCard;