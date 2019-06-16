define(["react", "react-class", "draw/Text"], function Link(React, ReactClass, Text)
{
	var style = {
		fontFamily: ["IDroid", "Audiowide", "sans-serif"],
		fontSize: 16,
		textAlign: "right",
		whitespace: "nowrap",

		left: 370,
		top: 552,
		width: 15,
		height: undefined
	};

	var Link = ReactClass({
		render: function render()
		{
			return React.createElement(Text, { text: this.props.value, style: style, repaint: this.props.repaint, canvas: this.props.canvas })
		}
	});

	Link.displayName = "Link";
	Link.defaultProps = {

	}
	return Link;
});
