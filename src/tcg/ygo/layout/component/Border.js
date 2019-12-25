define(["react", "react-class", "draw/Image", "../../Resources"], function Border(React, ReactClass, Image, resources)
{
	var Border = ReactClass({
		render: function render()
		{
			var border = resources + "/tcg/ygo/border/" + this.props.value + ".png";
			if (this.props.pendulum)
			{
				border = border.replace(".png", ".pendulum.png");
			}
			return React.createElement(Image, { 
				src: border, 
				style: {
					left: 0,
					top: 0,
					width: 420,
					height: 610
				},
				canvas: this.props.canvas, 
				repaint: this.props.repaint 
			});
		}
	});
	Border.displayName = "Border";
	Border.defaultProps = {
		value: "Normal"
	};
	return Border;
});
