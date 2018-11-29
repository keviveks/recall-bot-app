import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home, Settings, CallRecordedList } from './src';

const AppNavigator = createStackNavigator(
	{
		Home,
		Settings,
		CallRecordedList
	},
	{
		initialRouteName: 'Home'
	}
);

export default createAppContainer(AppNavigator);
