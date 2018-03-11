define(["react", "react-class", "draw/Text"], function Circulation(React, ReactClass, Text)
{
	var Circulation = ReactClass({
		render: function render()
		{
			return React.createElement(Text, { text: this.props.value, style: {
				fontFamily: ["Buenard", "serif"],
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
	Circulation.displayName = "Circulation";
	Circulation.defaultProps = {
		value: "",
	};
	return Circulation;
});
