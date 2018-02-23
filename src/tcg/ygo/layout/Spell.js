define(["react", "react-class", "./Shared"], function Spell(React, ReactClass, Shared)
{
	return ReactClass({
		render: function render()
		{
			return React.createElement(Shared, this.props)
		}
	});
});
