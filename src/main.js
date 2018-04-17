(function ()
{
	// Let the user know the application functions, but is busy with loading.
	var root = document.getElementById("react-root");
	root.innerText = "Loading";
	
	// Let the user know the application didn't load.
	requirejs.onError = function(error)
	{
		root.innerText = "Loading failed";
	};
	
	require(["react", "react-dom", "App"],function main(React, ReactDOM, App)
	{
		// Start the application.
		ReactDOM.render(React.createElement(App), root);
	});
})();
