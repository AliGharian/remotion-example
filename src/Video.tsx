import { Composition } from 'remotion';
import { AdvertisingMotion } from './AdvertisingMotion';


export const RemotionVideo: React.FC = () => {
	return (
		<>
			{/* //? the main composition  */}
			<Composition
				id="AdvertisingMotion"
				component={AdvertisingMotion}
				durationInFrames={30 * 16}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
