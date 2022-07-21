import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

const root: React.CSSProperties = {
  textAlign: 'center',
  position: 'relative',
  WebkitBoxReflect: 'below -0.45em linear-gradient(transparent, #0004)'

};

const sectionStyle: React.CSSProperties = {
  width: '100%',
  position: 'relative',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
};

const letterStyle: React.CSSProperties = {
  position: 'relative',
  display: 'inline-block',
};

export const Text9: React.FC<{
  titleText: string,
  fontFamily: string,
  fontSize: number,
  color: string,
}> = ({ titleText, fontFamily, fontSize, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const letters = titleText.split('')

  return (
    <section style={sectionStyle}>
      <h1 style={{
        ...root,
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: color,
      }}>
        {letters.map((l, i) => {
          let delay = i
          const value = spring({
            frame: frame - delay,
            fps: fps,
            from: 0,
            config: {
              mass: 20,
            },
          });
          return (
            <span key={i} style={{
              ...letterStyle,
              transform: `translate(0px, ${200 * Math.cos(10 * value)}px) scale(${12 / (10 * value)})`,
              opacity: value,
            }}>{l}</span>
          )
        })}
      </h1>
    </section>
  );
};
