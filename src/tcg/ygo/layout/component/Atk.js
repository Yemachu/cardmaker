define(["react", "react-class", "draw/Text"], function Atk(React, ReactClass, Text)
{
	var style = {
		fontFamily: ["Crimson Text", "serif"],
		fontSize: 18,
		textAlign: "right",
		whitespace: "nowrap",
		fontWeight: 600,
		
		left: 260,
		top: 551,
		width: 40,
		height: undefined
	};
	var Atk = ReactClass({
		render: function render()
		{
			return React.createElement(Text, { text: this.props.value, style: style, repaint: this.props.repaint, canvas: this.props.canvas })
		}
	});
	
	Atk.displayName = "Atk";
	Atk.defaultProps = {
		
	}
	return Atk;
});
