import React from 'react';
import Container from './Container';
import Move from './Move';

interface CustomImageProps {
  /**
  * Link to the image
  */
  src: string;
  /**
  * For the visually impaired homies
  */
  alt?: string;
  /**
  * Picture width
  */
  width?: string;
  /**
  * Picture height
  */
  height?: string;
  /**
  * Picture container's width/height. You only have to specify one or the other usually. Use these instaed of picture width/height
  */
  containerWidth?: string;
  containerHeight?: string;
  /**
  * Makes the picture's container outline transparent
  */
  outlineTransparent?: boolean;
  /**
  * Moves the picture inside of the container. Does not move the container.
  */
  moveRight?: string | number;
  moveDown?: string;
  /**
  * Aligns the picture inside the container
  */
  verticalAlign?: "top" | "middle" | "bottom";
  horizontalAlign?: "left" | "center" | "right";
  /**
   * I only added this to make a joke on a page that was empty at the time. As of writing this description, I have not yet made the joke and the page is still empty. However, I assume that by the time anyone reads this, the entire product page will be complete and the joke will no longer exist. To be honest, it's not even that funny of a joke. Or at least, anyone reading this wouldn't understand. But it's funny to me. I stared using the image of the open SAS100 from the features tab as a placeholder for images I haven't recieved yet. As of writing this I still have not receieved those images. But the reason that's important is becaus some of the images weren't going to be the same dimensions as the original from the features tab, so some of them ended up getting stretched out. And it was REALLY FUNNY. So funny that I showed my friend in school and he didn't even need to understand what was going on to laugh at all the pages with the reused picture. As of writing this, the Buy tab is empty, so I placed a super stretched out tall version of the open SAS100 picture, and I want to put another one next to it, but I want to flip it hoizontally. So I need to add this styles prop to do so.
   */
  style?: React.CSSProperties;
}

const Picture: React.FC<CustomImageProps> = ({
  src,
  alt = '',
  width = 'auto',
  height = 'auto',
  containerWidth,
  containerHeight,
  outlineTransparent,
  moveRight,
  moveDown,
  verticalAlign = "top",
  horizontalAlign = "left",
  style,
}) => {
  const imageStyle: React.CSSProperties = {
    width: width,
    height: height,
    ...style,
  };

  const content = (
    <Move moveRight={moveRight} moveDown={moveDown}>
      <img src={src} alt={alt} style={imageStyle} />
    </Move>
  );

  return (
    <Container
      width={containerWidth}
      height={containerHeight}
      outlineTransparent={outlineTransparent}
      horizontalAlign={horizontalAlign}
      verticalAlign={verticalAlign}
    >
      {content}
    </Container>
  );
};

export default Picture;