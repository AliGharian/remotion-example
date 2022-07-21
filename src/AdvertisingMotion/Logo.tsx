import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
import image from '../input_data/images/logo_zebra.png'

const LogoStyle: React.CSSProperties = {
  textAlign: 'center',
  position: 'relative',
  top: '100px'
};

export const Logo: React.FC<{
  titleText: string,
  fontFamily: string,
}> = ({ titleText, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const value = spring({
    frame: frame,
    fps: fps,
    from: 0,
    config: {
      mass: 100,
    },
  });

  return (
    <div style={{
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <img src={image} style={{
        ...LogoStyle,
        opacity: value
      }} />
      <h1 style={{
        fontSize: 100,
        fontFamily: fontFamily,
        position: 'absolute',
        color: 'white',
        textAlign: 'center',
        width: '100%',
        bottom: '150px',
        opacity: value,
      }}>{titleText}</h1>
    </div>
  );
};
