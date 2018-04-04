define(["react", "react-class", "draw/Text"], function Def(React, ReactClass, Text)
{
	var style = {
		fontFamily: ["Crimson Text", "serif"],
		fontSize: 18,
		textAlign: "right",
		whitespace: "nowrap",
		fontWeight: 600,
		
		left: 345,
		top: 551,
		width: 40,
		height: undefined
	};
	var Def = ReactClass({
		render: function render()
		{
			return React.createElement(Text, { text: this.props.value, style: style, repaint: this.props.repaint, canvas: this.props.canvas })
		}
	});
	
	Def.displayName = "Def";
	Def.defaultProps = {
		type: "Regular"
	}
	return Def;
});
