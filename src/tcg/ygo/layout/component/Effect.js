define(["react", "react-class", "draw/Text"], function Effect(React, ReactClass, Text)
{
	var styles = {
		Monster: {
			fontFamily: ["Matrix Book", "Spectral", "serif"],

			fontSize: 13,
			textAlign: "justify",

			left: 35,
			top: 475,
			width: 350,
			height: 75
		},
		Backrow: {
			fontFamily: ["Matrix Book", "Spectral", "serif"],

			fontSize: 13,
			textAlign: "justify",

			left: 35,
			top: 460,
			width: 350,
			height: 110
		},
		Vanilla: {
			fontFamily: ["Amiri", "serif"],
			fontStyle: "italic",

			fontSize: 13,
			textAlign: "justify",

			left: 35,
			top: 475,
			width: 350,
			height: 75
		},

		Skill: {
			fontFamily: ["Matrix Book", "Spectral", "serif"],

			fontSize: 13,
			textAlign: "justify",

			left: 35,
			top: 475,
			width: 350,
			height: 95
		},
	}

	var Effect = ReactClass({
		render: function render()
		{
			return React.createElement(
				Text,
				{
					text: this.props.value,
					style: Object.assign({}, styles[this.props.type]),
					repaint: this.props.repaint,
					canvas: this.props.canvas
				}
			);
		}
	});
	Effect.displayName = "Effect";
	Effect.defaultProps = {
		value: "",
		// Affects the positioning; backrow gets more room since it does not have
		// to accomodate for the ATK / DEF values among other things.
		// Pendulum effects are slightly tighter.
		type: "Monster",
		flavour: false,
	};
	return Effect;
});
