import React from 'react';
import { spring, useCurrentFrame, useVideoConfig, Audio } from 'remotion';

const root: React.CSSProperties = {
  textAlign: 'center',
  width: '100%',
};

export const BackgroundMusic: React.FC<{ src: string }> = ({ src }) => {
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
    <Audio src={src} style={root} />
  );
};
