import { Navigation } from 'react-native-navigation';

// screen related book keeping
import { registerScreens } from './screens';
registerScreens();

const createTabs = () => {
  let tabs = [
    {
      label: 'Search',
      screen: 'hireme.SearchScreen',
      title: 'Search'
    },
    {
      label: 'My Jobs',
      screen: 'hireme.JobsScreen',
      title: 'Search'
    },
    {
      label: 'Chat',
      screen: 'hireme.ChatsScreen',
      title: 'Chats'
    },
    {
      label: 'Profile',
      screen: 'hireme.UserScreen',
      title: 'My Profile',
      navigatorStyle: {
        tabBarBackgroundColor: '#4dbce9',
      }
    }
  ];
  return tabs;
};

// this will start our app
Navigation.startTabBasedApp({
  tabs: createTabs(),
  appStyle: {
    tabBarBackgroundColor: '#0f2362',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#63d7cc'
  },
});
