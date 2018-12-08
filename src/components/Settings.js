import React, { Component } from 'react';
import { View, Text, Switch, AsyncStorage } from 'react-native';
import ScreenNavigation from './ScreenNavigation';
import { styles } from './Styles';

export default class Settings extends Component {
	state = {
		appEnable: 'false'
	};

	toggleApp = (val) => {
		AsyncStorage.setItem('AppEnable', JSON.stringify(val), () => {
			AsyncStorage.getItem('AppEnable', (err, result) => {
				//console.log(result);
				this.setState({
					appEnable: result
				});
			});
		});
	};

	async componentDidMount() {
		await AsyncStorage.getItem('AppEnable', (err, result) => {
			//console.log(result);
			this.setState({
				appEnable: result
			});
		});
	}

	render() {
		const { appEnable } = this.state;
		return (
			<View style={styles.container}>
				<Text>Enable App::</Text>
				<Switch value={appEnable === 'true' ? true : false} onValueChange={this.toggleApp} />
			</View>
		);
	}
}

Settings.navigationOptions = {
	title: 'Settings',
	headerRight: <ScreenNavigation />
};
