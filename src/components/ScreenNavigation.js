import React, { Component } from 'react';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class ScreenNavigation extends Component {
	hideMenu = () => {
		this._menu.hide();
	};

	showMenu = () => {
		this._menu.show();
	};

	navigateScreen = (screenName) => {
		this.props.navigation.navigate(screenName);
		this.hideMenu();
	};

	render() {
		const { routeName } = this.props.navigation.state;
		return (
			<Menu
				ref={(ref) => (this._menu = ref)}
				button={
					<Icon
						name="md-more"
						color="#fff"
						size={25}
						onPress={this.showMenu}
						style={{ marginRight: 20, padding: 10 }}
					/>
				}
			>
				{routeName != 'Settings' && (
					<MenuItem onPress={() => this.navigateScreen('Settings')}>Settings</MenuItem>
				)}
				{routeName != 'CallRecordedList' && (
					<MenuItem onPress={() => this.navigateScreen('CallRecordedList')}>List</MenuItem>
				)}
				{routeName !== 'About' && <MenuItem onPress={() => this.navigateScreen('About')}>About</MenuItem>}
			</Menu>
		);
	}
}
export default withNavigation(ScreenNavigation);
