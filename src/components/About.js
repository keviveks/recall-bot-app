import React from 'react';
import { View, Text, Image } from 'react-native';
import ScreenNavigation from './ScreenNavigation';
import { LOGO } from '../images';
import { styles } from './Styles';

const { container, about, defaultImageSize } = styles;
const About = () => (
	<View style={container}>
		<View style={about}>
			<Image source={LOGO} style={defaultImageSize} />
			<Text>A real android supported answering machine. Support Us continuing development.</Text>
			<Text>Email: comingsoon</Text>
			<Text>Website: comingsoon (for more info)</Text>
			<Text>Version: 0.0.1</Text>
		</View>
	</View>
);

About.navigationOptions = {
	title: 'About Recall',
	headerRight: <ScreenNavigation />
};

export default About;
