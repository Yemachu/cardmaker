define(["handlebars", "text!./ygo/Layout.hbs", "text!./ygo/UI.html"], function (handlebars, layout, ui)
{
	
	return function CardMaker(root)
	{
		var iframe = root.appendChild(document.createElement("iframe"));
		console.log(handlebars)
		var template = handlebars.compile(layout);
		iframe.setAttribute("src", "about:blank");
		iframe.width  = 420;
		iframe.height = 610;
		iframe.addEventListener("load", function()
		{
			var document = iframe.contentDocument || iframe.contentWindow.document;
			document.open();
			document.write(template({ card: 
				{ 
					name: "Black Chicken", 
					effect: "This card cannot be used as a material for a summon.",
					pendulum: { enabled: false, blue: 10 },
					atk: 2500
				}}));
			document.close();
		})
		root.appendChild(document.createElement("div")).innerHTML = ui;
		
		
	}
});
