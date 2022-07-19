import {
	AbsoluteFill,
	Sequence,
} from 'remotion';
import { BaseSequence } from './AdvertisingMotion/BaseSequence';


//this component represent the compositon [AdvertisingMotion]
export const AdvertisingMotion: React.FC = () => {
	return (
		//every sequence comes here, a composition should have multiple sequences
		<AbsoluteFill style={{ backgroundColor: 'white' }}>
			<Sequence from={0} durationInFrames={30 * 16}>
				<BaseSequence />
			</Sequence>
		</AbsoluteFill>
	);
};
