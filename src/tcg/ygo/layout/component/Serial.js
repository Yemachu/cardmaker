define(["react", "react-class", "draw/Text"], function Serial(React, ReactClass, Text)
{
	var Serial = ReactClass({
		render: function render()
		{
			return React.createElement(Text, { text: this.props.value, style: {
				fontFamily: ["Matrix Book", "Spectral", "serif"],
				color: this.props.color,
				fontSize: 12,
				textAlign: "left",
				whitespace: "nowrap",

				left: 20,
				top: 580,
				width: 150,
				height: undefined
			}, canvas: this.props.canvas, repaint: this.props.repaint })
		}
	});
	Serial.displayName = "Serial";
	Serial.defaultProps = {
		value: "",
		color: "black"
	};
	return Serial;
});
