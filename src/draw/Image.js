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
					onLoad: this.onLoad
				}
			)
		},
		
		onLoad: function loaded(img)
		{
			this.setState({ image: img.target });
			(this.props.repaint || function(){})();
		},
		
		componentDidUpdate()
		{
			var canvas = this.props.canvas;
			// Make sure the image has downloaded.
			if (canvas !== null && this.state.image !== null)
			{
				var ctx = canvas.getContext("2d");
				ctx.drawImage(
					this.state.image, 
					this.props.x, 
					this.props.y, 
					// Width and height might not be provided, default to the dimensions
					// of the specified image in that case. Note that a width of 0 results
					// in the default size.
					this.props.width || this.state.image.width, 
					this.props.height || this.state.image.height
				);
			}
		}
	});
	// The compiler warns about "getDefaultProps" being deprecated.
	// Assigning them this way seems to solve it.
	image.defaultProps = { x: 0, y:0, width: undefined, height: undefined, canvas: null };
	
	return image;
});
