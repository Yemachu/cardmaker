define(["react", "react-class", "draw/Image", "../../Rarities"], function Image(React, ReactClass, Img, Rarities)
{
	var styles = {
		Normal: {
			left: 50, 
			top: 110, 
			width: 320, 
			height: 320
		},
		Pendulum: {
			left: 30, 
			top: 110, 
			width: 360, 
			height: 360
		}
	}
	
	var Image = ReactClass({
		render: function render()
		{
			var style = this.props.pendulum ? styles.Pendulum : styles.Normal;
			var foil = React.createElement("span");
			return React.createElement(
				React.Fragment,
				null,
				React.createElement(
					Img, 
					{
						src: this.props.value, 
						style: style,
						repaint: this.props.repaint, 
						canvas: this.props.canvas 
					}
				),
				React.createElement(
					Img,
					{
						src: (Rarities[this.props.rarity] || {}).foil,
						style: Object.assign({}, style, { mixBlendMode: "color-dodge"}),
						repaint: this.props.repaint, 
						canvas: this.props.canvas 
						
					}
				)
			);
		}
	});
	Image.displayName = "Image";
	Image.defaultProps = {
		rarity: "common"
	};
	return Image;
});
