export const navigationOptions = (navigation, title) => ({
	title,
	headerRight: <ScreenNavigation navigate={navigation.navigate} />,
	headerStyle: {
		backgroundColor: '#019ae8'
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontWeight: 'bold'
	}
});

//Recall
//headerConfig
