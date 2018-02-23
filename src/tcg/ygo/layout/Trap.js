define(["react", "react-class", "./Shared"], function Trap(React, ReactClass, Shared)
{
	return ReactClass({
		render: function render()
		{
			return React.createElement(Shared, Object.assign({}, this.props, { atk: "", def: "" }));
		}
	});
});
