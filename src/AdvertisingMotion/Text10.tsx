import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';


const sectionStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const titleStyle: React.CSSProperties = {
  textAlign: 'center',
  position: 'relative',
};

const wordStyle: React.CSSProperties = {
  position: 'relative',
  display: 'inline-block',
};


export const Text10: React.FC<{
  titleText: string,
  fontFamily: string,
  fontSize: number,
  color: string,
}> = ({ titleText, fontFamily, fontSize, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = titleText.split(' ')

  return (
    <section style={sectionStyle}>
      <h1 style={{
        // ...root,
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: color,
      }}>
        {words.map((word, index) => {
          let delay = index * 5
          const value = spring({
            frame: frame - delay,
            fps: fps,
            from: 0,
            config: {
              mass: 20,
            },
          });
          return (
            <><span key={index} style={{
              ...wordStyle,
              transform: `scale(${12 / (11 * value)})`,
              opacity: value,
            }}>{word}</span>
              <span key={Math.random()}> </span>
            </>
          )
        })}
      </h1>
    </section>
  );
};
