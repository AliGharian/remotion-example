import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

const root: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const Text5: React.FC<{
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
    },
  });

  return (
    <h1 style={{
      ...root,
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: color,
    }}>
      {titleText}
    </h1>
  );
};
