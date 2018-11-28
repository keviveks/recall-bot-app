import React from 'react';
import { View, Text, Button, Switch } from 'react-native';

export default class HomeScreen extends React.Component {
	state = {
		sw: false
	};
	static navigationOptions = {
		title: 'Recall',
		headerStyle: {
			backgroundColor: '#019ae8'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	};
	changeVal = (val) => {
		//console.log('SWITCH VALUE IS::', val);
		this.setState({
			sw: val
		});
	};
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Home Screen</Text>
				<Button title="Go to Settings" onPress={() => this.props.navigation.navigate('Settings')} />
				<Button title="Go to List" onPress={() => this.props.navigation.navigate('CallRecordedList')} />
				<Switch value={this.state.sw} thumbColor="#019ae8" onValueChange={this.changeVal} />
			</View>
		);
	}
}
