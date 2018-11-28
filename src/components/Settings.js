import React from 'react';
import { View, Text } from 'react-native';

export default class Settings extends React.Component {
	static navigationOptions = {
		title: 'Settings',
		headerStyle: {
			backgroundColor: '#019ae8'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	};
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Settings Screen</Text>
			</View>
		);
	}
}
