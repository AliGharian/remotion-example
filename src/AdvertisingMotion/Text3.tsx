import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { transform } from 'typescript';

const root: React.CSSProperties = {
  textAlign: 'center',
  width: '100%',
  position: 'absolute',
  top: '200px'
};

export const Text3: React.FC<{
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

  const scale = value <= 0.95 ? 1 : 2

  return (
    <h1 style={{
      ...root,
      fontFamily: fontFamily,
      fontSize: fontSize * scale,
      color: color,
    }}>
      {titleText}
    </h1>
  );
};
