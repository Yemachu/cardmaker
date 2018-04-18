/**
 * This file serves as a config for Require.js. It can be used to shorten
 * pathnames, and provide alternate sources for a file (among other things).
 * See: http://www.requirejs.org/docs/api.html#config
 */
var require = {
	paths: {
		"webfont": ["https://unpkg.com/webfontloader@1.6.28/webfontloader", "../lib/webfont/webfontloader"],
		"react": [
			typeof DEVELOP !== "undefined"
				? "https://unpkg.com/react@16/umd/react.development"
				: "https://unpkg.com/react@16/umd/react.production.min"
		],
		"react-dom": [
			typeof DEVELOP !== "undefined"
				? "https://unpkg.com/react-dom@16/umd/react-dom.development"
				: "https://unpkg.com/react-dom@16/umd/react-dom.production.min"
		],
		"react-class": [
			"https://unpkg.com/create-react-class@15.6.3/create-react-class.min"
		]
	}
}
