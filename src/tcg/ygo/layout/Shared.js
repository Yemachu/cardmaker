define(["react", "react-class", "draw/Image", "draw/Text"], function ygo_template_normal(React, ReactClass, Image, Text)
{
	return ReactClass({
		render: function render()
		{
			var shared = {
				canvas: this.props.canvas,
				repaint: this.props.repaint
			};
			return React.createElement(
				React.Fragment,
				null,
				// Draw the image first since the border might be transparent.
				React.createElement(
					Image, 
					Object.assign({}, shared, {
						src: this.props.image, 
						style: {
							left: 50, 
							top: 110, 
							width: 320, 
							height: 320 
						}
					})
				),
				// The border of the card to draw.
				React.createElement(
					Image,
					Object.assign({}, shared, {
						src: this.props.border,
						style: {
							left:0,
							top: 0,
							width: 420,
							height: 610
						}
					})
				),
				// The border of the card to draw.
				React.createElement(
					Image,
					Object.assign({}, shared, {
						src: this.props.attribute,
						style: {
							left:350,
							top: 28,
							width: 40,
							height: 40
						}
					})
				),
				// The card's name.
				React.createElement(
					Text,
					Object.assign({}, shared, {
						text: this.props.name,
						style: {
							fontFamily: ["Spectral SC", "serif"],
							fontSize: 32,
							fontWeight: 600,
							textAlign: "left",
							whitespace: "nowrap",
							
							left: 32,
							top: 24,
							width: 315,
							height: 48
						}
					})
				),
				// The (sub-)type.
				React.createElement(
					Text,
					Object.assign({}, shared, {
						text: this.props.type,
						style: {
							fontFamily: ["Spectral SC", "serif"],
							fontSize: 16,
							fontWeight: 800,
							textAlign: "left",
							whitespace: "nowrap",
							
							left: 35,
							top: 458,
							width: 350,
							height: 20
						}
					})
				),
				React.createElement(
					Text,
					Object.assign({}, shared, {
						text: this.props.effect,
						style: {
							fontFamily: ["Buenard", "serif"],
							fontSize: 12,
							textAlign: "left",
							
							left: 35,
							top: 474,
							width: 350,
							height: 80
						}
					})
				),
				React.createElement(
					Text,
					Object.assign({}, shared, {
						text: this.props.atk,
						style: {
							fontFamily: ["Crimson Text", "serif"],
							fontSize: 16,
							textAlign: "right",
							whitespace: "nowrap",
							
							left: 260,
							top: 552,
							width: 40,
							height: undefined
						}
					})
				),
				
				React.createElement(
					Text,
					Object.assign({}, shared, {
						text: this.props.def,
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
					})
				),
				
				React.createElement(
					Text,
					Object.assign({}, shared, {
						text: this.props.circulation,
						style: {
							fontFamily: ["Buenard", "serif"],
							fontSize: 12,
							textAlign: "left",
							whitespace: "nowrap",
							
							left: 20,
							top: 580,
							width: 150,
							height: undefined
						}
					})
				),
			);
		}
	});
});
