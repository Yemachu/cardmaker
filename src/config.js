/**
 * This file serves as a config for Require.js. It can be used to shorten
 * pathnames, and provide alternate sources for a file (among other things).
 * See: http://www.requirejs.org/docs/api.html#config
 */
 var DEVELOP = true;
var require = {
	// All paths are resolved with "/src/" as its root.
	"baseUrl": "src",
	// Loading the config before require allows to specify whether to use the 
	// built or development version with relative ease.
	"deps": [typeof DEVELOP !== "undefined" ? "main" : "../build/cardmaker.min"],
	// Some dependencies have a different source path.
	"paths": {
		// Used to make sure the correct fonts have been loaded.
		"webfont": "../lib/webfontloader",
		// Use text files as if they were a define with a long string.
		"text": "../lib/text"
	}
}
