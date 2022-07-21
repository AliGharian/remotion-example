import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

const root: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const text: React.CSSProperties = {
  textAlign: 'center',
};

export const Text1: React.FC<{
  titleText: string,
  fontFamily: string,
  fontSize: number,
  color: string,
}> = ({ titleText, fontFamily, fontSize, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const value = spring({
    frame: frame,
    fps: fps,
    from: 0,
    config: {
      stiffness: 100,
    },
  });

  return (
    <div style={{ ...root }}>
      <h1 style={{
        ...text,
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: color,
        transform: `scale(${1.5 / (value + 0.01)})`
      }}>
        {titleText}
      </h1>
    </div>
  );
};
