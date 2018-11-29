import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home, Settings, CallRecordedList, About } from './src';

const AppNavigator = createStackNavigator(
	{
		Home,
		Settings,
		CallRecordedList,
		About
	},
	{
		initialRouteName: 'Home'
	}
);

export default createAppContainer(AppNavigator);
