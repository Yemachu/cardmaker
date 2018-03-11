define(["react", "react-class", "draw/Text"], function Copyright(React, ReactClass, Text)
{
	var Copyright = ReactClass({
		render: function render()
		{
			return React.createElement(Text, { text: this.props.value, style: {
				fontFamily: ["Buenard", "serif"],
				fontSize: 12,
				textAlign: "right",
				whitespace: "nowrap",
				
				left: 230,
				top: 580,
				width: 150,
				height: undefined
			}, canvas: this.props.canvas, repaint: this.props.repaint })
		}
	});
	Copyright.displayName = "Copyright";
	Copyright.defaultProps = {
		value: "",
	};
	return Copyright;
});
