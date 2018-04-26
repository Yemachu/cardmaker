define(["react", "react-class"], function Image(React, ReactClass)
{
	/**
	 * Image to draw on a canvas.
	 *
	 * In case no canvas DOM element is provided to it, it should default to 
	 * a regular DOM image.
	 */
	var image = ReactClass({
		getInitialState: function initialState()
		{
			return { image: null };
		},
		
		render: function render()
		{
			return React.createElement(
				"img",
				{
					src: this.props.src,
					crossOrigin: "anonymous",
					onLoad: this.onLoad,
					style: {
						position: "absolute",
						left: this.props.style.left,
						top: this.props.style.top,
						width: this.props.style.width,
						height: this.props.style.height,
						mixBlendMode: this.props.style.mixBlendMode
					}
				}
			)
		},
		
		onLoad: function loaded(img)
		{
			this.setState({ image: img.target });
			this.props.repaint();
		},
		
		componentDidUpdate: function()
		{
			var canvas = this.props.canvas;
			// Make sure the image has downloaded.
			if (canvas !== null && this.state.image !== null)
			{
				var ctx = canvas.getContext("2d");
				ctx.save();
				ctx.globalCompositeOperation = this.props.style.mixBlendMode;
				ctx.drawImage(
					this.state.image, 
					this.props.style.left, 
					this.props.style.top, 
					// Width and height might not be provided, default to the dimensions
					// of the specified image in that case. Note that a width of 0 results
					// in the default size.
					this.props.style.width || this.state.image.width, 
					this.props.style.height || this.state.image.height
				);
				ctx.restore();
			}
		}
	});
	// The compiler warns about "getDefaultProps" being deprecated.
	// Assigning them this way seems to solve it.
	image.defaultProps = {
		style: {
			left: 0, // 
			top: 0,
			width: undefined, 
			height: undefined, 
			mixBlendMode: "normal"
		},
		canvas: null, 
		repaint: function repaint(){/* Empty function.*/} 
	};
	
	return image;
});
