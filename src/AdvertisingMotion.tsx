import {
	AbsoluteFill,
	Sequence,
} from 'remotion';
import { BackgroundMusic } from './AdvertisingMotion/BackgroundMusic';
import backgroundMuisc from './input_data/sounds/1.wav'


//this component represent the compositon [AdvertisingMotion]
export const AdvertisingMotion: React.FC = () => {
	return (
		//every sequence comes here, a composition should have multiple sequences
		<AbsoluteFill style={{ backgroundColor: 'white' }}>
			{/* //background msuic */}
			<Sequence from={0} durationInFrames={30 * 16}>
				<BackgroundMusic src={backgroundMuisc} />
			</Sequence>
		</AbsoluteFill>
	);
};
