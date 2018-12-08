import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home, Settings, CallRecordedList, About } from './components';

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
	}
);

export default createAppContainer(AppNavigator);
