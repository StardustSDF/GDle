import React from 'react';
import Container from './Container';
import Picture from './Picture';
import RC from './RC'
import Text from './Text'

interface ColoredSquareProps {
    type: string;
    guess: string;
    color: string;
    picture: string;
    children?: React.ReactNode;
}
const GDleSquare: React.FC<ColoredSquareProps> = ({
  type, guess, color, picture
}) => {
  const squareStyle: React.CSSProperties = {
    width: 120,
    height: 120,
    backgroundColor: color,
    borderRadius: 10
  };
  if (type === 'song') console.log(guess)

  return (
    <RC column>
        <Text outlineTransparent horizontalAlign='center'>
            {type === 'theme' ? 'decoration' : type}
        </Text>
        <Container
            width='120px'
            height='120px'
            outlineTransparent={true}
            verticalAlign="middle"
            horizontalAlign="center"
            style={squareStyle}>
                <Picture outlineTransparent width={type === "rate" ? '120px' : type === 'coins' ? '130px' : type === 'objects' ? (String(guess).match(/s/)) ? '90px' : '60px' : type === 'theme' ? '120px' : type === 'stars' ? '69px' : (type === 'difficulty' && !guess?.match(/ /)) ? '70px' : '90px'} src={picture}/>
        </Container>
        <Text outlineTransparent containerHeight={type === 'gamemodes' ? 120 : 'auto'} containerWidth={type === 'gamemodes' ? 120 : 'auto'} horizontalAlign='center' verticalAlign='middle' textJustification='center' moveDown={type === 'gamemodes' ? '-120px' : '0px'}>
            {guess}
        </Text>
    </RC>
  );
};

export default GDleSquare;
