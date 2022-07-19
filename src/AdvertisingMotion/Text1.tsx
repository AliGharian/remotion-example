import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

const root: React.CSSProperties = {
  textAlign: 'center',
  width: '100%',
  position: 'absolute',
  top: '100px'
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

  const offset = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <h1 style={{
      ...root,
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: color,
      transform: `scale(${1.5 / (value + 0.01)})`
    }}>
      {titleText}
    </h1>
  );
};
