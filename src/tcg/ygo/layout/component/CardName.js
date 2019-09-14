define(["react", "react-class", "draw/Text", "../../Rarities"], function CardName(React, ReactClass, Text, Rarities)
{

	var stylePreset =  {
		regular: {
			fontFamily: ["Matrix Regular Small Caps", "Spectral SC", "serif"],
			fontSize: 32,
			fontStyle: "normal",
			fontWeight: 600,
			textAlign: "left",
			whitespace: "nowrap",

			left: 32,
			top: 24,
			width: 315,
			height: 48
		},
		skill: {
				fontFamily: ["Heebo", "sans-serif"],
				fontSize: 32,
				fontStyle: "normal",
				fontWeight: 500,
				textAlign: "left",
				whitespace: "nowrap",

				left: 32,
				top: 24,
				width: 315,
				height: 48
		}
	}
	var colors = {
		default: { highlight: { color: "transparent" }, base: { color: "#000"} },
		white: { highlight: { color: "transparent" }, base: { color: "#FFF"} },
		silver: { highlight: { color: "#b6b6b6" }, base: { color: "#1e1e1e"} },
		gold: { highlight: { color: "#d3b146"}, base: {color: "#4e3518"}}
	}

	var CardName = ReactClass({
		render: function render()
		{
			var color = (Rarities[this.props.rarity] || {}).color || this.props.color;
			var style = stylePreset[this.props.type] || stylePreset.regular;

			return React.createElement(
				React.Fragment,
				null,
				React.createElement(Text,
				{
					text: this.props.value,
					style: Object.assign({}, style, (colors[color] || colors.default).highlight, { top: style.top-1, left: style.left-1 }),
					repaint: this.props.repaint,
					canvas: this.props.canvas
				}),
				React.createElement(Text,
					{
						text: this.props.value,
						style: Object.assign({}, style, (colors[color] || colors.default).base),
						repaint: this.props.repaint,
						canvas: this.props.canvas
					}
				)
			);
		}
	});
	CardName.displayName = "CardName";
	CardName.defaultProps = {
		value: "",
		rarity: "common",
		type: "regular",
		color: "black"
	};
	return CardName;
});
