import React from 'react';
import { View, Text } from 'react-native';
import ScreenNavigation from './ScreenNavigation';

export default class CallRecordedList extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Call Records Screen</Text>
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
