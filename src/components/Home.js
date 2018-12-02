import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import ScreenNavigation from './ScreenNavigation';
import { CALL } from '../images';

export default class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Recall',
		headerRight: <ScreenNavigation navigate={navigation.navigate} />,
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
		const { navigation: { navigate } } = this.props;
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<TouchableOpacity style={{ opacity: 1 }} onPress={() => navigate('CallRecordedList')}>
					<Image source={CALL} style={{ width: 200, height: 200 }} />
				</TouchableOpacity>
			</View>
		);
	}
}
