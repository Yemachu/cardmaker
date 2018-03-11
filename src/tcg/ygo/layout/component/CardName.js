define(["react", "react-class", "draw/Text"], function CardName(React, ReactClass, Text)
{
	var style = {
			fontFamily: ["Spectral SC", "serif"],
			fontSize: 32,
			fontStyle: "normal",
			fontWeight: 600,
			textAlign: "left",
			whitespace: "nowrap",
			
			left: 32,
			top: 24,
			width: 315,
			height: 48,
	}
	var CardName = ReactClass({
		render: function render()
		{
			return React.createElement(
				Text, 
				{
					text: this.props.value, 
					style: Object.assign({}, style, { color: this.props.color }),
					repaint: this.props.repaint,
					canvas: this.props.canvas
				}
			);
		}
	});
	CardName.displayName = "CardName";
	CardName.defaultProps = {
		value: "",
		color: "black"
	};
	return CardName;
});
