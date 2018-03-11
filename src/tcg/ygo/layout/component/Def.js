define(["react", "react-class", "draw/Text"], function Def(React, ReactClass, Text)
{
	var Def = ReactClass({
		render: function render()
		{
			return React.createElement(Text, { text: this.props.value, style: this.props.style, repaint: this.props.repaint, canvas: this.props.canvas })
		}
	});
	
	Def.displayName = "Def";
	Def.defaultProps = {
		style: {
			fontFamily: ["Crimson Text", "serif"],
			fontSize: 16,
			textAlign: "right",
			whitespace: "nowrap",
			
			left: 345,
			top: 552,
			width: 40,
			height: undefined
		}
	}
	return Def;
});
