define(["react", "react-class", "draw/Text"], function Def(React, ReactClass, Text)
{
	var defaultStyle = {
		fontFamily: ["Crimson Text", "serif"],
		fontSize: 16,
		textAlign: "right",
		whitespace: "nowrap",
		
		left: 345,
		top: 552,
		width: 40,
		height: undefined
	};
	var styles = {
		Regular: Object.assign({}, defaultStyle),
		Link: Object.assign({}, defaultStyle, { fontFamily: ["Audiowide", "sans-serif"]})
	};
	
	var Def = ReactClass({
		render: function render()
		{
			return React.createElement(Text, { text: this.props.value, style: styles[this.props.type], repaint: this.props.repaint, canvas: this.props.canvas })
		}
	});
	
	Def.displayName = "Def";
	Def.defaultProps = {
		type: "Regular"
	}
	return Def;
});
