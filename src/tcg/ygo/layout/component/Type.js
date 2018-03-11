define(["react", "react-class", "draw/Text"], function Type(React, ReactClass, Text)
{
	var styles = {
		Monster: {
			fontFamily: ["Spectral SC", "serif"],
			fontSize: 16,
			fontWeight: 800,
			textAlign: "left",
			whitespace: "nowrap",
			
			left: 35,
			top: 458,
			width: 350,
			height: 20
		},
		Backrow: {
				fontFamily: ["Spectral SC", "serif"],
				fontSize: 16,
				fontWeight: 800,
				textAlign: "right",
				whitespace: "nowrap",
				
				left: 35,
				top: 75,
				width: 350,
				height: 20
		}
	};
	
	var Type = ReactClass({
		render: function render()
		{
			return React.createElement(
				Text, 
				{
					text: ["[", this.props.value, "]"].join(" "), 
					style: Object.assign({}, styles[this.props.type]),
					canvas: this.props.canvas, 
					repaint: this.props.repaint 
				});
		}
	});
	Type.displayName = "Circulation";
	Type.defaultProps = {
		value: "",
		type: "Monster", // The other option is "Backrow".
	};
	return Type;
});
