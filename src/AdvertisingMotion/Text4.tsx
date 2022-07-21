import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';


const root: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  background: 'url(https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg)',
};

const titleStyle: React.CSSProperties = {
  textAlign: 'center',
};

export const Text4: React.FC<{
  titleText: string,
  fontFamily: string,
  fontSize: number,
  color: string,
  backgroundColor: string,
}> = ({ titleText, fontFamily, fontSize, color, backgroundColor }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const value = spring({
    frame: frame,
    fps: fps,
    from: 0,
    config: {
    },
  });

  return (
    <section style={{ ...root }}>
      <h1 style={{
        ...titleStyle,
        fontFamily: fontFamily,
        fontSize: fontSize,
        padding: '100%',
        color: color,
        mixBlendMode: value >= 0.8 ? 'multiply' : 'unset',
        backgroundColor: value >= 0.8 ? backgroundColor : 'none',
      }}>
        {titleText}
      </h1>
    </section >
  );
};
