import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default class MyMenu extends Component {
	_menu = null;
	setMenuRef = (ref) => {
		this._menu = ref;
	};

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
		return (
			<View>
				<Menu ref={this.setMenuRef} button={<Text onPress={this.showMenu}>Show menu</Text>}>
					<MenuItem onPress={() => this.navigateScreen('Settings')}>Settings</MenuItem>
					<MenuItem onPress={() => this.navigateScreen('CallRecordedList')}>List</MenuItem>
				</Menu>
			</View>
		);
	}
}
