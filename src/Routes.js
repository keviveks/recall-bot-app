import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home, Settings, CallRecordedList, About, ScreenNavigation } from './components';

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

// AppNavigator.navigationOptions = ({ navigation }) => {
// 	debugger;
// 	const { routeName } = navigation.state;
// 	return {
// 		tabBarLabel: 'Home!',
// 		title: 'Call Records',
// 		headerRight: <ScreenNavigation routeName={routeName} navigate={navigation.navigate} />
// 	};
// };

export default createAppContainer(AppNavigator);
