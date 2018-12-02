import React from 'react';
import { View, Text } from 'react-native';
import ScreenNavigation from './ScreenNavigation';

export default class Settings extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Settings Screen</Text>
			</View>
		);
	}
}

Settings.navigationOptions = ({ navigation }) => {
	const { routeName } = navigation.state;
	return {
		title: 'Settings',
		headerRight: <ScreenNavigation routeName={routeName} navigate={navigation.navigate} />
	};
};
