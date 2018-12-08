import React, { Component } from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ParentProvider, Home, Settings, CallRecordedList, About, ScreenNavigation } from './components';

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: Home
		},
		Settings: {
			screen: Settings,
			navigationOptions: {
				title: 'Settings'
			}
		},
		CallRecordedList: {
			screen: CallRecordedList,
			navigationOptions: {
				title: 'Call Record List'
			}
		},
		About: {
			screen: About,
			navigationOptions: {
				title: 'About Recall'
			}
		}
	},
	// {
	// 	Home,
	// 	Settings,
	// 	CallRecordedList,
	// 	About
	// },
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'Recall',
			headerStyle: {
				backgroundColor: '#019ae8'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			},
			headerRight: <ScreenNavigation />
		}
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
	render() {
		return (
			<ParentProvider>
				<AppContainer />
			</ParentProvider>
		);
	}
}
