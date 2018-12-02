import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ScreenNavigation from './ScreenNavigation';
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

CallRecordedList.navigationOptions = ({ navigation }) => {
	const { routeName } = navigation.state;
	return {
		title: 'Call Records',
		headerRight: <ScreenNavigation routeName={routeName} navigate={navigation.navigate} />
	};
};
