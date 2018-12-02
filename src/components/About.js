import React from 'react';
import { View, Text } from 'react-native';
import ScreenNavigation from './ScreenNavigation';

export default class About extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>About Screen</Text>
			</View>
		);
	}
}

About.navigationOptions = ({ navigation }) => {
	const { routeName } = navigation.state;
	return {
		title: 'About Recall',
		headerRight: <ScreenNavigation routeName={routeName} navigate={navigation.navigate} />
	};
};
