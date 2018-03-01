define(["react", "react-class", "draw/Canvas", "./layout/All"], function App(React, ReactClass, Canvas, Layouts)
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
	Card.Layout = Layouts;
	return Card;
});
