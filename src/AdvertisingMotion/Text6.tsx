import React from 'react';

const root: React.CSSProperties = {
  textAlign: 'center',
  width: '100%',
  height: '100%',
};

export const Text6: React.FC<{
  titleText: string,
  fontFamily: string,
  fontSize: number,
  color: string,
}> = ({ titleText, fontFamily, fontSize, color }) => {

  return (
    <div style={root}>
      <h1 style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: color,
        position: 'absolute',
        top: '25px',
        left: '50px',
      }}>
        {titleText}
      </h1>
      <h1 style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: color,
        position: 'absolute',
        top: '25px',
        right: '50px',
      }}>
        {titleText}
      </h1>
      <h1 style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: color,
        position: 'absolute',
        bottom: '25px',
        left: '50px',
      }}>
        {titleText}
      </h1>
      <h1 style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: color,
        position: 'absolute',
        bottom: '25px',
        right: '50px',
      }}>
        {titleText}
      </h1>
    </div>
  );
};
