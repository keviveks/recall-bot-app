import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { ParentConsumer } from './Provider';
import { styles } from './Styles';

class Settings extends Component {
	render() {
		//console.log('Prop data:', this.props);
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

// usefull tip
// const BindSettings = ParentConsumer(Settings);

// BindSettings.navigationOptions = {
// 	title: 'Default Title'
// };

// export default BindSettings;
