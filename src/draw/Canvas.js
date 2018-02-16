define(["react", "react-class", "./Group"], function Canvas(React, ReactClass, Group)
{
	/**
	 * Top-level container for other "draw/*" components.
	 * 
	 * This element provides the canvas on which is descendants will draw.
	 */
	return ReactClass({
		
		getInitialState: function initialState()
		{
			// Canvas will be created upon first render of this component.
			return { canvas: null };
		},
		
		render: function render()
		{
			return React.createElement(
				"canvas",
				{
					width: this.props.width,
					height: this.props.height,
					ref: function(canvas){ this.canvas = canvas; }.bind(this)
				},
				React.createElement(Group, { canvas: this.state.canvas }, this.props.children)
			);
		},
		
		componentDidMount: function didMount()
		{
			// Make the canvas part of this element's state.
			var canvas = this.canvas;
			delete this.canvas;
			
			// Force a redraw now that the canvas is available.
			this.setState({ canvas: canvas });
		}
	});
});
