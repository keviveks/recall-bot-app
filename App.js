import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home, Settings, CallRecordedList, About, ScreenNavigation } from './src';

const AppNavigator = createStackNavigator(
	{
		Home,
		Settings,
		CallRecordedList,
		About
	},
	{
		defaultNavigationOptions: {
			title: 'Recall',
			headerStyle: {
				backgroundColor: '#019ae8'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	},
	{
		initialRouteName: 'Home'
	}
);

export default createAppContainer(AppNavigator);
