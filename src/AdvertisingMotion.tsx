import {
	AbsoluteFill,
	Sequence,
} from 'remotion';
import { BackgroundMusic } from './AdvertisingMotion/BackgroundMusic';
import { BackgroundVideo } from './AdvertisingMotion/BackgroundVideo';
import { Text1 } from './AdvertisingMotion/Text1';
import { Text2 } from './AdvertisingMotion/Text2';
import { Text3 } from './AdvertisingMotion/Text3';
import backgroundMuisc from './input_data/sounds/1.wav'
import video1 from './input_data/videos/1.mp4'
let data = require('./input_data/config.json');


//this component represent the compositon [AdvertisingMotion]
export const AdvertisingMotion: React.FC = () => {
	const startText = data.text.start_text[0].split(' ')
	const backgroundColor = data.color[0]
	return (
		//every sequence comes here, a composition should have multiple sequences
		<AbsoluteFill style={{ backgroundColor: backgroundColor, justifyContent: 'center' }}>
			{/* //background msuic */}
			<Sequence from={0} durationInFrames={30 * 16}>
				<BackgroundMusic src={backgroundMuisc} />
			</Sequence>
			<Sequence from={380} durationInFrames={30 * 16}>
				<BackgroundVideo src={video1} />
			</Sequence>
			<Sequence from={0} durationInFrames={20}>
				<Text1 titleText={startText[0]} fontFamily={'Classic'} fontSize={300} color={'white'} />
			</Sequence>
			<Sequence from={20} durationInFrames={20}>
				<Text2 titleText={startText[1]} fontFamily={'Classic'} fontSize={400} color={'red'} />
			</Sequence>
			<Sequence from={40} durationInFrames={25}>
				<Text3 titleText={startText[2]} fontFamily={'Classic'} fontSize={200} color={'yellow'} />
			</Sequence>
		</AbsoluteFill>
	);
};
