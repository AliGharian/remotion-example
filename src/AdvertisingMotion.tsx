import {
	AbsoluteFill,
	Sequence,
} from 'remotion';
import { BackgroundMusic } from './AdvertisingMotion/BackgroundMusic';
import { BackgroundVideo } from './AdvertisingMotion/BackgroundVideo';
import { Logo } from './AdvertisingMotion/Logo';
import { Portion } from './AdvertisingMotion/Portion';
import { Text1 } from './AdvertisingMotion/Text1';
import { Text10 } from './AdvertisingMotion/Text10';
import { Text11 } from './AdvertisingMotion/Text11';
import { Text2 } from './AdvertisingMotion/Text2';
import { Text3 } from './AdvertisingMotion/Text3';
import { Text4 } from './AdvertisingMotion/Text4';
import { Text5 } from './AdvertisingMotion/Text5';
import { Text6 } from './AdvertisingMotion/Text6';
import { Text7 } from './AdvertisingMotion/Text7';
import { Text8 } from './AdvertisingMotion/Text8';
import { Text9 } from './AdvertisingMotion/Text9';
import backgroundMuisc from './input_data/sounds/1.wav';
import video1 from './input_data/videos/1.mp4';
let data = require('./input_data/config.json');


//this component represent the compositon [AdvertisingMotion]
export const AdvertisingMotion: React.FC = () => {
	const startText = data.text.start_text[0].split(' ')
	const endText = data.text.end_text[0].split(' ')
	const middleText = data.text.middle_text[0].main.split(' ')
	const backgroundColor = data.color[0]
	const fontSize = data.font_size
	const colors = data.color
	const mainFontFamily = data.main_font
	const secondaryFontFamily = data.secondary_font
	return (
		//every sequence comes here, a composition should have multiple sequences
		<AbsoluteFill style={{ backgroundColor: backgroundColor, justifyContent: 'center' }}>
			{/* //background msuic */}
			<Sequence key={'backgroundMusic'} from={0} durationInFrames={30 * 16}>
				<BackgroundMusic src={backgroundMuisc} />
			</Sequence>
			<Sequence key={'backgroundVideo'} from={370} durationInFrames={30 * 16}>
				<BackgroundVideo src={video1} />
			</Sequence>
			<Sequence key={'text1'} from={0} durationInFrames={20}>
				<Text1 titleText={startText[0]} fontFamily={mainFontFamily} fontSize={fontSize.large} color={colors[2]} />
			</Sequence>
			<Sequence key={'text2'} from={20} durationInFrames={20}>
				<Text2 titleText={startText[1]} fontFamily={mainFontFamily} fontSize={fontSize.x_large} color={colors[3]} />
			</Sequence>
			<Sequence key={'text3'} from={40} durationInFrames={25}>
				<Text3 titleText={startText[2]} fontFamily={mainFontFamily} fontSize={fontSize.medium} color={colors[1]} />
			</Sequence>
			<Sequence key={'text4'} from={65} durationInFrames={25}>
				<Text4 titleText={startText[3]} fontFamily={mainFontFamily} fontSize={fontSize.large} color={colors[2]} backgroundColor={colors[4]} />
			</Sequence>
			<Sequence key={'text5'} from={90} durationInFrames={25}>
				<Text5 titleText={startText[4]} fontFamily={mainFontFamily} fontSize={fontSize.medium} color={colors[3]} />
			</Sequence>
			<Sequence key={'text6'} from={105} durationInFrames={10} >
				<Text6 titleText={startText[5]} fontFamily={mainFontFamily} fontSize={fontSize.small} color={colors[2]} />
			</Sequence>
			<Sequence key={'text7'} from={115} durationInFrames={20} >
				<Text7 titleText={middleText[0]} fontFamily={mainFontFamily} fontSize={fontSize.medium} color={colors[3]} />
			</Sequence>
			<Sequence key={'text8'} from={135} durationInFrames={20} >
				<Text8 titleText={middleText[1]} fontFamily={mainFontFamily} fontSize={fontSize.large} color={colors[0]} />
			</Sequence>
			<Sequence key={'text9'} from={155} durationInFrames={50} >
				<Text9 titleText={middleText[2]} fontFamily={mainFontFamily} fontSize={fontSize.large} color={colors[3]} />
			</Sequence>
			<Sequence key={'portion'} from={205} durationInFrames={50} >
				<Portion titleText={startText[5]} fontFamily={mainFontFamily} fontSize={20} color={colors[3]} />
			</Sequence>
			<Sequence key={'text11'} from={255} durationInFrames={50} >
				<Text11 titleText={endText[0] + " " + endText[1]} fontFamily={mainFontFamily} fontSize={fontSize.medium} color={colors[3]} />
			</Sequence>
			<Sequence key={'text10'} from={305} durationInFrames={67} >
				<Text10 titleText={endText.slice(2).join(" ")} fontFamily={mainFontFamily} fontSize={fontSize.medium} color={colors[2]} />
			</Sequence>
			<Sequence key={'logo'} from={370} durationInFrames={30 * 16} >
				<Logo titleText={data.brand_name} fontFamily={secondaryFontFamily} />
			</Sequence>
		</AbsoluteFill>
	);
};
