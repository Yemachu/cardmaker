define(["react", "react-class", "draw/Text"], function Atk(React, ReactClass, Text)
{
	var Atk = ReactClass({
		render: function render()
		{
			return React.createElement(Text, { text: this.props.value, style: this.props.style, repaint: this.props.repaint, canvas: this.props.canvas })
		}
	});
	
	Atk.displayName = "Atk";
	Atk.defaultProps = {
		style: {
			fontFamily: ["Crimson Text", "serif"],
			fontSize: 16,
			textAlign: "right",
			whitespace: "nowrap",
			
			left: 260,
			top: 552,
			width: 40,
			height: undefined
		}
	}
	return Atk;
});
