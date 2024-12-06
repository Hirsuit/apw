module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,jpeg,html,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};