define(["react", "react-class", "tcg/ygo/CardMaker"], function App(React, ReactClass, YGOCardMaker)
{
	return ReactClass({
		render: function render()
		{
			return React.createElement(YGOCardMaker, null);
		}
	});
});
