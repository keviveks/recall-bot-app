import React, { Component } from 'react';
import { View } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MyMenu extends Component {
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
			<Menu
				ref={(ref) => (this._menu = ref)}
				button={
					<Icon name="md-more" color="#fff" size={25} onPress={this.showMenu} style={{ marginRight: 10 }} />
				}
			>
				<MenuItem onPress={() => this.navigateScreen('Settings')}>Settings</MenuItem>
				<MenuItem onPress={() => this.navigateScreen('CallRecordedList')}>List</MenuItem>
			</Menu>
		);
	}
}
