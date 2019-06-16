define(["react", "react-class", "draw/Group", "draw/Text"], function Pendulum(React, ReactClass, Group, Text)
{
	var Pendulum = ReactClass({
		render: function render()
		{
			return this.props.enabled ? React.createElement(
				Group,
				{ canvas: this.props.canvas, repaint: this.props.repaint },
				React.createElement(
					Text,
					{
						text: this.props.effect,
						style: {
							fontFamily: ["Matrix Book", "Spectral", "serif"],

							fontSize: 13,
							textAlign: "justify",

							left: 65,
							top: 385,
							width: 290,
							height: 70
						}
					}
				),
				React.createElement(
					Text,
					{
						text: this.props.blue,
						style: {
							fontFamily: ["Crimson Text", "serif"],
							fontSize: 28,
							textAlign: "center",
							fontWeight: 600,

							left: 32,
							top: 410,
							width: 23,
							height: 30
						}
					}
				),
				React.createElement(
					Text,
					{
						text: this.props.red,
						style: {
							fontFamily: ["Crimson Text", "serif"],
							fontSize: 28,
							textAlign: "center",
							fontWeight: 600,

							left: 365,
							top: 410,
							width: 23,
							height: 30
						}
					}
				)
			) : null;
		}
	});
	Pendulum.displayName = "Pendulum";
	Pendulum.defaultProperties = {
		enabled: false,
		blue: 0,
		red: 0,
		effect: ""
	};
	return Pendulum;
});
