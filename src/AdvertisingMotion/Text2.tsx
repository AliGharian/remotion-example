import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

const root: React.CSSProperties = {
  textAlign: 'center',
  width: '100%',
};

export const Text2: React.FC<{
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
      color: color
    }}>
      {titleText}
    </h1>
  );
};
