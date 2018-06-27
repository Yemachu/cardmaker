(function ()
{
	// Let the user know the application functions, but is busy with loading.
	var root = document.getElementById("root");
	root.innerText = "Loading";
	
	// Let the user know the application didn't load.
	require.onError = function(error)
	{
		root.innerText = "Loading failed";
		console.error(error);
	};
	
	require(["App"],function main(App)
	{
		root.innerText = "";
		new App(root);
	});
})();
