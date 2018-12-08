import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';

export default class CallRecordedList extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>No Items In The List!</Text>
			</View>
		);
	}
}
