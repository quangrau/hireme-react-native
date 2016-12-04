import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './utils/AppIcons';

registerScreens();

const navigatorStyle = {
	statusBarColor: '#831d19',
	statusBarTextColorScheme: 'light',
	navigationBarColor: '#831d19',
	navBarBackgroundColor: '#33A9E0',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white'
};

class App extends Component {
	constructor(props) {
		super(props);
		iconsLoaded.then(() => {
			this.startApp();
		});
	}

	startApp() {
		Navigation.startTabBasedApp({
			tabs: [
				{
          label: 'Search',
          title: 'Search',
          screen: 'hireme.SearchScreen',
					icon: iconsMap['ios-search-outline'],
					selectedIcon: iconsMap['ios-search-outline--active'],
					navigatorStyle
				},
				{
          label: 'My Jobs',
          title: 'My Jobs',
          screen: 'hireme.JobsScreen',
					icon: iconsMap['ios-briefcase-outline'],
					selectedIcon: iconsMap['ios-briefcase-outline--active'],
					navigatorStyle
				},
				{
          label: 'Chat',
          title: 'Chats',
          screen: 'hireme.ChatsScreen',
					icon: iconsMap['ios-chatbubbles-outline'],
					selectedIcon: iconsMap['ios-chatbubbles-outline--active'],
					navigatorStyle
				},
				{
          label: 'Profile',
          title: 'My Profile',
          screen: 'hireme.UserScreen',
					icon: iconsMap['ios-person-outline'],
					selectedIcon: iconsMap['ios-person-outline--active'],
					navigatorStyle
				}
			],
			tabsStyle: {

			},
			animationType: 'slide-down'
		});
	}
}

export default App;
