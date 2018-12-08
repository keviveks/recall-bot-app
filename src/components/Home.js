import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { ParentConsumer } from './Provider';
import ScreenNavigation from './ScreenNavigation';
import { CALL } from '../images';
import { styles } from './Styles';

class HomeScreen extends Component {
	render() {
		const { appStatus, navigation: { navigate } } = this.props;
		const { home, defaultImageSize, enableWarning } = styles;
		return (
			<View style={{ flex: 1 }}>
				{!appStatus && <Text style={enableWarning}>App disable</Text>}
				<View style={home}>
					<TouchableWithoutFeedback onPress={() => navigate('CallRecordedList')}>
						<Image source={CALL} style={defaultImageSize} />
					</TouchableWithoutFeedback>
				</View>
			</View>
		);
	}
}

export default ParentConsumer(HomeScreen);
