import { Navigation } from 'react-native-navigation';

import Job from './modules/jobs/Job';
import Jobs from './modules/jobs/Jobs';
import Chat from './modules/chat/Chat';
import Chats from './modules/chat/Chats';
import Search from './modules/jobs/Search';
import User from './modules/user/User';

export function registerScreens() {
	Navigation.registerComponent('hireme.JobScreen', () => Job);
	Navigation.registerComponent('hireme.JobsScreen', () => Jobs);
  Navigation.registerComponent('hireme.ChatScreen', () => Chat);
  Navigation.registerComponent('hireme.ChatsScreen', () => Chats);
	Navigation.registerComponent('hireme.SearchScreen', () => Search);
  Navigation.registerComponent('hireme.UserScreen', () => User);
}
