import React, { useEffect, useRef, useState } from "react";
import { compare, getColor, condenseNumber } from '../functions' 
import Container from './Container'
import Move from './Move'
import RC from './RC'
import Text from './Text'
import Picture from './Picture'
import GDleSquare from "./GDleSquare";
import { verifiedArtists } from "../levels/data";

const print = console.log;

type LevelCardProps = {
  data: any[];
};

export const LevelCard: React.FC<LevelCardProps> = ({ data }) => {
  const name = data[0]
  const stars = data[1]
  let difficulty: any = String(data[2][1])
  let realDifficulty = difficulty
  difficulty = difficulty.match(/D/) && "Demon" || difficulty
  const rate = data[3]
  const coins = data[4]
  const length = data[5]
  const objects = data[6]
  const updateVersion = data[7]
  const songName = data[8]
  const songType = data[9]
  const creator = data[10]
  const downloads = data[11]
  const likes = data[12]
  let newArray = []
  data[13][0][0] === "true" && newArray.push("copied")
  data[13][1][0] === "true" && newArray.push("objects")  
  data[13][2][0] === "true" && newArray.push("twoPlayer")
  const lightBrown = data[14]
  const realName = data[15]
  const levelName = useRef<HTMLDivElement>(null)
  const sogName = useRef<HTMLDivElement>(null)
  const [levelNameFontSize, setLevelNameFontSize] = useState(58)
  const [sogNameFontSize, setSogNameFontSize] = useState(33)
  const [isLoaded, setIsLoaded] = useState(false)
  const [nameLoaded, setNameLoaded] = useState(false)
  const songColor = data[16]
  const gamemodes = data[17]
  const theme = data[18]

  useEffect(() => {
    if (levelName.current) {
      if (levelName.current.scrollWidth > 480) {
        setLevelNameFontSize((prevFontSize) => prevFontSize - 1);
      } else {
        setNameLoaded(true); // Only set nameLoaded when levelName fits
      }
    }
  }, [levelNameFontSize, realName]); // Depend on levelNameFontSize to recheck on size change

  useEffect(() => {
    if (sogName.current) {
      if (sogName.current.scrollWidth > 480) {
        setSogNameFontSize((prevFontSize) => prevFontSize - 1);
      } else if (nameLoaded) {
        // Only set isLoaded when sogName fits and nameLoaded is true
        setTimeout(() => {
          setIsLoaded(true)
        }, 169)
      }
    }
  }, [sogNameFontSize, nameLoaded, sogName]); 
//  data={[originalGuess, stars, difficulty, rate, coins, length, objects, updateVersion, songName, songType]}/>
  return (
    <Container foregroundColor={isLoaded? 'transparent' : "#A1582C"} width={850} height={200} boxShadow="t" backgroundColor={lightBrown ? "#C1743F" : "#A1582C"}>

      {/* <Picture moveDown="200px" moveRight={-2} containerHeight="0px" containerWidth="0px" width="800px" height="200px" src="/assets/LevelCard/RealDeal.png"/>
      <Picture moveRight={800} moveDown="-2px" containerHeight="0px" containerWidth="0px" width="800px" height="200px" src="/assets/LevelCard/RealDeal.png"/>
      <Picture moveRight={800} moveDown="200px" containerHeight="0px" containerWidth="0px" height="200px" src="/assets/LevelCard/Cologne.png"/> */}
      <RC row>
        <RC column>
          <Picture containerWidth="100px" containerHeight="115px" width={difficulty === "Demon" ? "87px" : '77px'} horizontalAlign="center" verticalAlign="bottom" src=
          {`${process.env.PUBLIC_URL}/assets/LevelCard/${realDifficulty}.png`}/>
          <Text fontSize={26} letterSpacing={-1.1} textOutline="1.5px" color={data[2][2] !== 'green' && data[2][2] || "white"} containerHeight={22} containerWidth={100} fontFamily="PUSAB" horizontalAlign="center" verticalAlign="middle" lineHeight={0.1} hoverInfoBox={
            <Container>
              {data[2][2] === "orange" && "wrong demon difficulty" ||
              data[2][2] === "red" && "wrong difficulty or not a demon" ||
              "correct difficulty"} <br></br>
            </Container>
          }>
            {difficulty}
          </Text>
          <RC row>
          <Text fontFamily="PUSAB" textOutline="1.5px" fontSize={28} color={stars[2] !== 'green' && stars[2] || "white"} containerWidth={49} containerHeight={39} horizontalAlign="right" verticalAlign="middle" lineHeight={0.1}>
            {stars[1]}
          </Text>
          <Container width={5}/>
          <Picture containerWidth="46px" width="26px" verticalAlign="middle" src=
          {`${process.env.PUBLIC_URL}/assets/LevelCard/Stars.png`}/>
          </RC>
          <Container width={100} height={30}>
            
          </Container>
        </RC>
        <RC column> 
      <RC row>
        <RC column>
          <Container height={6}/>
          <Text ref={levelName} whiteSpace="nowrap" moveRight="4px" textOutline="2.1px" textShadow="2px 2px 3px #61351a, 2px 2px 3px #61351a, 2px 2px 3px #61351a, 2px 2px 3px #61351a, 2px 2px 3px #61351a, 2px 2px 3px #61351a, 2px 2px 3px #61351a, 2px 2px 3px #61351a" fontSize={levelNameFontSize} /*58 */ color={realName[2] !== 'green' && realName[2] || "white"} containerHeight={63} containerWidth={480} fontFamily="PUSAB" horizontalAlign="left" verticalAlign="middle" lineHeight={0.1}>
            {realName[1]}
          </Text>
          <RC row>
            <Container width={7}>

            </Container>
            <Text fontSize={39} color={creator[2] !== 'green' && creator[2] || "#febf28"} letterSpacing={-0.1} textOutline="1.1px" containerHeight={33} fontFamily="PUSAB" horizontalAlign="left" textShadow="1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a" verticalAlign="middle" lineHeight={0.1}>
              {creator[1]}
            </Text>
            <Picture containerWidth="58px" width="26px" horizontalAlign="center" verticalAlign="middle" src=
            {`${process.env.PUBLIC_URL}/assets/objects/${newArray[0]}.png`}/>
            {newArray.length > 1 && <Picture containerWidth="26px" width="26px" horizontalAlign="center" verticalAlign="middle" src=
            {`${process.env.PUBLIC_URL}/assets/objects/${newArray[1]}.png`}/>}
            {newArray.length > 2 && <Picture containerWidth="58px" width="26px" horizontalAlign="center" verticalAlign="middle" src=
            {`${process.env.PUBLIC_URL}/assets/objects/${newArray[2]}.png`}/>}
            {/* <Picture height="29px" verticalAlign="top" containerHeight="33px"  src="/assets/letters/B.png"/> */}
          </RC>

          <Text ref={sogName} whiteSpace="nowrap" moveRight="7px" letterSpacing={-0.1} textShadow="1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a" textOutline="1.1px" fontSize={sogNameFontSize} color={songType[2] !== "green" && songType[2] || songColor} containerHeight={53} containerWidth={480} fontFamily="PUSAB" horizontalAlign="left" verticalAlign="middle" lineHeight={0.1} hoverInfoBox={
            <Container>
              {songType[2] === "red"
                  ? songType[1] === 'newgrounds'
                      ? "not a newgrounds exclusive GD song artist"
                  : "song/song artst not available in game"
              : `correct song type (${songType[1]})`}
            </Container>
          }>
           {songName[1]}
          </Text>
        </RC>
        <Container width={268}>
          <RC column>
          <Container backgroundColor={theme[2]}>
          <Picture containerWidth="190px" containerHeight="110px" height="101px" horizontalAlign="center" verticalAlign="bottom" src=
          {`${process.env.PUBLIC_URL}/assets/LevelCard/${theme[1]}.png`}/>
          </Container>
          <Text fontFamily="PUSAB" containerHeight={10} lineHeight={0.01} horizontalAlign="center" moveDown="-5px" fontSize={16.5} color="white" textOutline="0.8px" hoverInfoBox={
            <Container width={300}>
              <Text fontSize={16.5} color="white" fontFamily="PUSAB" textOutline="0.8px">
              {"This is the most controversial stat. Don't agree with a level's decoration theme? Leave a suggestion!"}
              </Text>
            </Container>
          }>
            {theme[1]}
          </Text>
          </RC>
          <Container width={255}></Container>
          <RC column>
            <Container height={5}></Container>
            {Array.isArray(gamemodes[1]) && gamemodes[1].map((gamemode: string) => (
              <Text containerHeight={18} containerWidth={5} verticalAlign="middle" horizontalAlign="right" textJustification="right" fontFamily="PUSAB" fontSize={22} color={gamemodes[4].indexOf(gamemode) === -1 && "red" || "green"} textOutline="0.8px" lineHeight={0.0}>
                {gamemode}
              </Text>
            ))}
          </RC>
        </Container>
      </RC>
          <RC row>
            <Picture containerWidth="45px" containerHeight="30px" horizontalAlign="center" verticalAlign="middle" width="32px" src=
            {`${process.env.PUBLIC_URL}/assets/LevelCard/Clock.png`}/>
            <Text fontSize={29} textOutline="1.1px" textShadow="1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a" color={length[2] !== 'green' && length[2] || "white"} containerHeight={30} fontFamily="PUSAB" horizontalAlign="left" verticalAlign="middle" lineHeight={0.1}>
              {length[1]}
            </Text>
            <Container width={22}>

            </Container>
            <Picture containerWidth="42px" containerHeight="30px" horizontalAlign="center" verticalAlign="middle" width="32px" src=
            {`${process.env.PUBLIC_URL}/assets/LevelCard/Downloads.png`}/>
            <Text fontSize={29} textOutline="1.1px" textShadow="1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a" color={downloads[2] !== 'green' && downloads[2] || "white"} containerHeight={30} fontFamily="PUSAB" horizontalAlign="left" verticalAlign="middle" lineHeight={0.1}>
              {condenseNumber(downloads[1]).concat(Number(downloads[1]) > Number(downloads[4]) ? 'ˇˇ' : Number(downloads[1]) < Number(downloads[4]) ? 'ˆˆ' : '')}
            </Text>
            <Container width={20} height={30}>

            </Container>
            <Picture moveDown="-2px" containerWidth="45px" containerHeight="30px" horizontalAlign="center" verticalAlign="middle" width="32px" src=
            {`${process.env.PUBLIC_URL}/assets/LevelCard/Likes.png`}/>
            <Text fontSize={29} textShadow="1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a" textOutline="1.1px" color={likes[2] !== 'green' && likes[2] || "white"} containerHeight={30} fontFamily="PUSAB" horizontalAlign="left" verticalAlign="middle" lineHeight={0.1}>
              {condenseNumber(likes[1]).concat(Number(likes[1]) > Number(likes[4]) ? 'ˇˇ' : Number(likes[1]) < Number(likes[4]) ? 'ˆˆ' : '')}
            </Text>
            <Container width={20}>

            </Container>
            <Picture containerWidth="45px" containerHeight="30px" horizontalAlign="center" verticalAlign="middle" width="26px" src=
            {`${process.env.PUBLIC_URL}/assets/LevelCard/Objects.png`}/>
            <Text fontSize={29} textShadow="1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a, 1px 1px 2px #61351a" textOutline="1.1px" color={objects[2] !== 'green' && likes[2] || "white"} containerHeight={30} fontFamily="PUSAB" horizontalAlign="left" verticalAlign="middle" lineHeight={0.1}>
              {condenseNumber(objects[1]).concat(Number(objects[1]) > Number(objects[4]) ? 'ˇˇ' : Number(objects[1]) < Number(objects[4]) ? 'ˆˆ' : '')}
            </Text>
            <Container width={20}>

            </Container>
            <Picture moveDown="-5px" containerWidth="45px" horizontalAlign="center" verticalAlign="middle" width="32px" src=
            {`${process.env.PUBLIC_URL}/assets/LevelCard/Clock.png`}/>
            <Text fontSize={29} textOutline="1.5px" color={updateVersion[2] !== 'green' && updateVersion[2] || "white"} containerHeight={30} fontFamily="PUSAB" horizontalAlign="left" verticalAlign="middle" lineHeight={0.1}>
              {updateVersion[1]}
            </Text>
          </RC>          
        </RC>
      </RC>
    </Container>
  )
};

export default LevelCard;