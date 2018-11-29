import React from 'react';
import { View, Image } from 'react-native';
import MyMenu from './MyMenu';
import { LOGO } from '../images';
export default class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Recall',
		headerRight: <MyMenu navigate={navigation.navigate} />,
		headerStyle: {
			backgroundColor: '#019ae8'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	});

	changeVal = (val) => {
		this.setState({
			sw: val
		});
	};

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Image source={LOGO} />
			</View>
		);
	}
}
