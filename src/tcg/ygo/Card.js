define(["react", "react-class", "draw/Canvas", "./layout/All", "./Attributes", "./Stars", "./Icons"], function App(React, ReactClass, Canvas, Layouts, Attributes, Stars, Icons)
{
	var Card = ReactClass({
		render: function render()
		{
			return React.createElement(
				Canvas,
				{
					width: 420,
					height: 610,
					className: "ygo card"
				},
				React.createElement(
					Layouts[this.props.layout],
					this.props,
				)
			);
		}
	});
	Card.defaultProps = { layout: "Normal" };
	Card.displayName = "Card";
	Card.Layout = Layouts;
	Card.Attributes = Attributes;
	Card.Stars = Stars;
	Card.Icons = Icons;
	return Card;
});
