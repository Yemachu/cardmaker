define(["react", "react-class", "draw/Image"], function Image(React, ReactClass, Img)
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
			return React.createElement(
				Img, 
				{
					src: this.props.value, 
					style: this.props.pendulum ? styles.Pendulum : styles.Normal,
					repaint: this.props.repaint, 
					canvas: this.props.canvas 
				}
			);
		}
	});
	Image.displayName = "Image";
	Image.defaultProps = {
		
	};
	return Image;
});
