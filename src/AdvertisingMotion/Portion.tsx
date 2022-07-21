import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';


const containerStyle: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  perspective: '1000px',
  transformStyle: 'preserve-3d',
  alignItems: 'center',
};

const portionStyle: React.CSSProperties = {
  textAlign: 'center',
  position: 'relative',
  padding: '3px',
  color: 'white',
  transformStyle: 'preserve-3d',
  border: '1px solid #FFF',
  boxSizing: 'border-box',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
};

export const Portion: React.FC<{
  titleText: string,
  fontFamily: string,
  fontSize: number,
  color: string,
}> = ({ titleText, fontFamily, fontSize, color }) => {
  const frame = useCurrentFrame();
  const { fps, height, width } = useVideoConfig();

  const portions = () => {
    let list = []
    for (let i = 0; i <= 500; i++) {
      let rnd = Math.random()
      list.push(rnd)
    }
    return list
  }

  return (
    <div style={containerStyle}>
      {
        portions().map((item, index) => {
          let delay = index / 10
          const value = spring({
            frame: frame - delay,
            fps: fps,
            from: 0,
            config: {
              mass: 20,
            },
          });
          return (<div key={index} style={{
            ...portionStyle,
            transform: `scale(${10 * value}) translate(${100 * item}px, ${100 * item * index}px)`,
            fontSize: fontSize,
            fontFamily: fontFamily,
            background: color,
          }}>
            {titleText}
          </div>)
        })
      }
    </div>
  );
};
