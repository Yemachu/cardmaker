define(["react", "react-class", "draw/Text"], function Id(React, ReactClass, Text)
{
	var shared = {
			fontFamily: ["Matrix Book", "Spectral", "serif"],
			fontSize: 12,
			whitespace: "nowrap",

			height: undefined
	}
	var styles = {
		regular: {
			textAlign: "right",
			left: 290,
			top: 437,
			width: 80,
		},
		pendulum: {
			color: "black",
			textAlign: "left",
			left: 35,
			top: 555,
			width: 80,
		},
		link: {
			textAlign: "right",
			left: 265,
			top: 437,
			width: 80,
		}
	};

	var Id = ReactClass({
		render: function render()
		{
			return React.createElement(Text, { text: this.props.value, style: Object.assign({color: this.props.color}, shared, styles[this.props.position]), canvas: this.props.canvas, repaint: this.props.repaint })
		}
	});
	Id.displayName = "Id";
	Id.defaultProps = {
		value: "",
		color: "black",
		position: "regular"
	};
	return Id;
});
