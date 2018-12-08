import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
const Parent = React.createContext(null);

export default class ParentProvider extends Component {
	state = {
		appEnable: false
	};

	async componentDidMount() {
		await AsyncStorage.getItem('AppEnable', (err, result) => {
			//console.log(result);
			this.setState({
				appEnable: result === 'true' ? true : false
			});
		});
	}

	toggleApp = (val) => {
		AsyncStorage.setItem('AppEnable', JSON.stringify(val), () => {
			AsyncStorage.getItem('AppEnable', (err, result) => {
				//console.log(result);
				this.setState({
					appEnable: result === 'true' ? true : false
				});
			});
		});
	};

	render() {
		const { children } = this.props;
		const { appEnable } = this.state;
		const actions = {
			appStatus: appEnable,
			enableDisableApp: this.toggleApp
		};
		return <Parent.Provider value={actions}>{children}</Parent.Provider>;
	}
}

export const ParentConsumer = (Component) =>
	class Consumer extends React.Component {
		render() {
			return (
				<Parent.Consumer>
					{({ appStatus, enableDisableApp }) => (
						<Component {...this.props} appStatus={appStatus} enableDisableApp={enableDisableApp} />
					)}
				</Parent.Consumer>
			);
		}
	};
