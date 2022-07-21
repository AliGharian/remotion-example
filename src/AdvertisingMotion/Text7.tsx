import React from 'react';
import { spring, useCurrentFrame, useVideoConfig, Video } from 'remotion';
import video from '../input_data/videos/2.mp4'


const root: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const Text7: React.FC<{
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
      mass: 20,
    },
  });

  return (
    <>
      <Video src={video} />
      <h1 style={{
        ...root,
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: color,
        position: 'absolute',
        opacity: value,
      }}>
        {titleText}
      </h1>
    </>
  );
};
