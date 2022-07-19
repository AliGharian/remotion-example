import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

const root: React.CSSProperties = {
	textAlign: 'center',
	width: '100%',
};

export const BaseSequence: React.FC = () => {
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
		<div style={root}>BaseSequence</div>
	);
};
