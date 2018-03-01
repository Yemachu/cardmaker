define(["react", "react-class", "./Shared"], function Vanilla(React, ReactClass, Shared)
{
	return ReactClass({
		render: function render()
		{
			return React.createElement(Shared, this.props)
		}
	});
});
