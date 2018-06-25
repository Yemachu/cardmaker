define(["text!./ygo/Layout.html"], function (layout)
{
	return function CardMaker(root)
	{
		root.appendChild(document.createElement("iframe")).setAttribute("src", "src/tcg/ygo/Layout.html");
	}
});
