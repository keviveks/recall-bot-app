import React from 'react';
import { View, Text, Image } from 'react-native';
import ScreenNavigation from './ScreenNavigation';
import { LOGO } from '../images';

const About = () => (
	<View style={{ backgroundColor: '#f4f4f4', flex: 1, alignItems: 'center', paddingTop: 30 }}>
		<Image source={LOGO} style={{ width: 200, height: 200 }} />
		<Text>Recall: A real android supported answering machine. Support Us continuing development.</Text>
		<Text>Email: comingsoon</Text>
		<Text>Website: comingsoon (for more info)</Text>
		<Text>Version: 0.0.1</Text>
	</View>
);

About.navigationOptions = ({ navigation }) => {
	const { routeName } = navigation.state;
	return {
		title: 'About Recall',
		headerRight: <ScreenNavigation routeName={routeName} navigate={navigation.navigate} />
	};
};

export default About;
