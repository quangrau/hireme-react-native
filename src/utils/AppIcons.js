import Ionicons from 'react-native-vector-icons/Ionicons';

const size = {
  normal: 24,
  big: 50,
  veryBig: 100,
};
const colors = {
  black: '#000000',
  white: '#FFFFFF',
};
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
	'ios-person': [size.normal, colors.black],
	'ios-person--big': [size.big, '#bbb'],

	'ios-person--active': [size.normal, colors.white],
	'ios-person--active--big': [size.big, colors.white],
	'ios-person--active--very-big': [size.veryBig, colors.white],

	'ios-person-outline': [size.normal, '#7CBB00'],
	'ios-person-outline--active': [size.normal, '#FF6D27'],

	'ios-people': [size.normal, '#7CBB00'],
	'ios-people--active': [size.normal, '#FF6D27'],

	'ios-keypad': [size.normal, '#bbb'],
	'ios-keypad--active': [size.normal, colors.white],

	'ios-briefcase-outline': [size.normal, '#bbb'],
	'ios-briefcase-outline--active': [size.normal, colors.white],

	'ios-chatbubbles-outline': [size.normal, '#bbb'],
	'ios-chatbubbles-outline--active': [size.normal, colors.white],

	'ios-search-outline': [size.normal, '#bbb'],
	'ios-search-outline--active': [size.normal, colors.white]
};

const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
	new Promise.all(
		Object.keys(icons).map(iconName =>
		// IconName--suffix--other-suffix is just the mapping name in iconsMap
		Ionicons.getImageSource(
      iconName.replace(replaceSuffixPattern, ''),
      icons[iconName][0],
      icons[iconName][1]
		))
	).then(sources => {
		Object.keys(icons)
		.forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

		// Call resolve (and we are done)
		resolve(true);
  })
  .catch(err => {
  console.log(err);
  });
});

export {
	iconsMap,
	iconsLoaded
};
