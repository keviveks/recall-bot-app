import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		backgroundColor: '#f4f4f4'
	},
	enableWarning: {
		color: 'red',
		padding: 5,
		backgroundColor: '#fff',
		borderBottomColor: '#eee',
		borderBottomWidth: 1
	},
	defaultImageSize: {
		width: 200,
		height: 200
	},
	home: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
		justifyContent: 'center'
	},
	about: {
		alignItems: 'center'
	}
});
