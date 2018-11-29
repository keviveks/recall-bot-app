import React from 'react';
import { View, Text } from 'react-native';

export default class About extends React.Component {
	static navigationOptions = {
		title: 'About Recall',
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
				<Text>About Screen</Text>
			</View>
		);
	}
}
