import React from 'react';
import { View, Text } from 'react-native';

export default class CallRecordedList extends React.Component {
	static navigationOptions = {
		title: 'Call Records',
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
				<Text>Call Records Screen</Text>
			</View>
		);
	}
}
