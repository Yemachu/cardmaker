define(["react", "react-class", "draw/Text"], function Def(React, ReactClass, Text)
{
	var style = {
		fontFamily: ["Audiowide", "sans-serif"],
		fontSize: 16,
		textAlign: "right",
		whitespace: "nowrap",
		
		left: 370,
		top: 552,
		width: 15,
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
