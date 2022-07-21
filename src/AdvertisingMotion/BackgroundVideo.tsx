import React from 'react';
import { spring, useCurrentFrame, useVideoConfig, Video } from 'remotion';

const root: React.CSSProperties = {
  textAlign: 'center',
  width: '100%',
};

export const BackgroundVideo: React.FC<{ src: string }> = ({ src }) => {
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
    <div style={{ backgroundColor: 'black', width: '100%', height: '100%', opacity: 1/value }}>
      <Video src={src} style={root} />
    </div>
  );
};
