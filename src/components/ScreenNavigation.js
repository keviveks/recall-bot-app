import React, { Component } from 'react';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ScreenNavigation extends Component {
	hideMenu = () => {
		this._menu.hide();
	};

	showMenu = () => {
		this._menu.show();
	};

	navigateScreen = (screenName) => {
		this.props.navigate(screenName);
		this.hideMenu();
	};

	render() {
		const { routeName } = this.props;
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
