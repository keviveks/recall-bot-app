import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { ParentConsumer } from './Provider';
import CallDetectorManager from 'react-native-call-detection';
import { CALL } from '../images';
import { styles } from './Styles';

class HomeScreen extends Component {
	componentWillMount() {
		this.callDetector = new CallDetectorManager(
			(event) => {
				if (event === 'Disconnected') {
					// Do something call got disconnected
					console.log('call disconnected');
				} else if (event === 'Connected') {
					// Do something call got connected
					// This clause will only be executed for iOS
					console.log('call connected');
					alert('Detect call connected');
				} else if (event === 'Incoming') {
					// Do something call got incoming
					console.log('Incoming call detected');
					alert('Detect Incoming');
				} else if (event === 'Dialing') {
					// Do something call got dialing
					// This clause will only be executed for iOS
				} else if (event === 'Offhook') {
					//Device call state: Off-hook.
					// At least one call exists that is dialing,
					// active, or on hold,
					// and no calls are ringing or waiting.
					// This clause will only be executed for Android
					console.log('Call receive');
					alert('Detect call receive');
				} else if (event === 'Missed') {
					// Do something call got missed
					// This clause will only be executed for Android
					console.log('Missed call');
					alert('Detect Miss call');
				}
			},
			false, // if you want to read the phone number of the incoming call [ANDROID], otherwise false
			() => {}, // callback if your permission got denied [ANDROID] [only if you want to read incoming number] default: console.error
			{
				title: 'Phone State Permission',
				message:
					'This app needs access to your phone state in order to react and/or to adapt to incoming calls.'
			} // a custom permission request message to explain to your user, why you need the permission [recommended] - this is the default one
		);
	}

	componentWillUnmount() {
		this.callDetector && this.callDetector.dispose();
	}

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
