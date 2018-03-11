define(["react", "react-class", "draw/Canvas", "./layout/All", "./Attributes", "./Stars"], function App(React, ReactClass, Canvas, Layouts, Attributes, Stars)
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
					this.props.layout,
					this.props,
				)
			);
		}
	});
	Card.defaultProps = { layout: Layouts.Normal };
	Card.displayName = "Card";
	Card.Layout = Layouts;
	Card.Attributes = Attributes;
	Card.Stars = Stars;
	return Card;
});
