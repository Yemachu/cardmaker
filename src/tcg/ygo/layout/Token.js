define(["react", "react-class", "./Shared"], function Token(React, ReactClass, Shared)
{
	return ReactClass({
		render: function render()
		{
			return React.createElement(Shared, this.props)
		}
	});
});
