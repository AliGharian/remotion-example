import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

const root: React.CSSProperties = {
  textTransform: 'uppercase',
  textAlign: 'center',


};

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#red',
  width: '100%',
};

const wordStyle: React.CSSProperties = {

};

export const Text11: React.FC<{
  titleText: string,
  fontFamily: string,
  fontSize: number,
  color: string,
}> = ({ titleText, fontFamily, fontSize, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = titleText.split(' ')

  const value = spring({
    frame: frame,
    fps: fps,
    from: 0,
    config: {
      mass: 20,
    },
  });

  return (
    <section style={sectionStyle}>
      <h1 key={'header'} style={{ ...root, fontSize: fontSize, fontFamily: fontFamily, color: color, opacity:value }}>
        <span key={'first'} style={{ ...wordStyle, textShadow: `0 0 ${200 * value}px #03bcf4` }}>
          {words[0]}
        </span>
        <span>  </span>
        <span key={'last'} style={{ ...wordStyle, textShadow: `0 0 ${200 * value}px #FFF` }}>
          {words[1]}
        </span>
      </h1>
    </section>
  );
};
