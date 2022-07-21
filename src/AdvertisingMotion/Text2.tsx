import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

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

export const Text2: React.FC<{
  titleText: string,
  fontFamily: string,
  fontSize: number,
  color: string,
}> = ({ titleText, fontFamily, fontSize, color }) => {

  return (
    <div style={{
      ...root,
    }}>
      <h1 style={{
        ...text,
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: color
      }}>
        {titleText}
      </h1>
    </div>
  );
};
