import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { ParentConsumer } from './Provider';
import { styles } from './Styles';

class Settings extends Component {
	render() {
		const { appStatus, enableDisableApp } = this.props;
		return (
			<View style={styles.container}>
				<Text>Enable App::</Text>
				<Switch value={appStatus} onValueChange={(val) => enableDisableApp(val)} />
			</View>
		);
	}
}

export default ParentConsumer(Settings);
