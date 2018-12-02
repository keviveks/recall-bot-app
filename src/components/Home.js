import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import ScreenNavigation from './ScreenNavigation';
import { CALL } from '../images';
import { styles } from './Styles';

export default class HomeScreen extends Component {
	state = {};
	async componentDidMount() {
		await AsyncStorage.getItem('AppEnable', (err, result) => {
			//console.log(result);
			if (result === 'true') {
				this.setState({
					appEnable: true
				});
			} else {
				this.setState({
					appEnable: false
				});
			}
		});
	}

	render() {
		const { appEnable } = this.state;
		const { navigation: { navigate } } = this.props;
		const { home, defaultImageSize, enableWarning } = styles;

		return (
			<View style={{ flex: 1 }}>
				{!appEnable && <Text style={enableWarning}>App disable</Text>}
				<View style={home}>
					<TouchableWithoutFeedback onPress={() => navigate('CallRecordedList')}>
						<Image source={CALL} style={defaultImageSize} />
					</TouchableWithoutFeedback>
				</View>
			</View>
		);
	}
}

HomeScreen.navigationOptions = ({ navigation }) => ({
	headerRight: <ScreenNavigation navigate={navigation.navigate} />
});
