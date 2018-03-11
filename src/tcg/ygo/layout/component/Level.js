define(["react", "react-class", "../../Stars", "draw/Group", "draw/Image"], function Level(React, ReactClass, Stars, Group, Image)
{
	// Maximum number of stars to draw at a time. Should not be 0.
	var MAX_LEVEL = 12;
	
	var Level = ReactClass({
		render: function render()
		{
			// Contains the images which will eventually be drawn.
			var levels = [];
			var style = this.props.style;
			
			// Calculate the spacing between each star.
			var spacing = ((style.maxWidth - (MAX_LEVEL * style.width)) / MAX_LEVEL);
			var level = Math.min(Math.abs(this.props.value), MAX_LEVEL);
			var rtl = this.props.value > 0;
			
			var width = rtl ? (style.maxWidth - (style.width + spacing)) : 0;
			var direction = rtl ? -1 : 1;
			
			// Generate the images which will be drawn, but no more than allowed.
			for (var i=0; i<level; ++i)
			{
				levels[levels.length] = React.createElement(
					Image, 
					{ 
						// Get the url of the star to draw on the image.
						src: Stars[this.props.star].url,
						// React requires identifiers when assigning children by an array.
						key: "star:" + i,
						style: 
						{
							// Position the star based on its number.
							left: style.left + width + (direction * (i * (style.width +spacing))),
							top: style.top,
							// The images used for the stars are square.
							width: style.width,
							height: style.height,
						}
					});
			}
			return React.createElement(
				Group,
				this.props,
				levels
			)
		}
	});
	// Make the name slightly more descriptive when debugging.
	Level.displayName = "Level";
	Level.defaultProps = {
		
		style: {
			float: "right",
			
			// Positioning based on 420 × 610.
			left: 35, // (420 - width) / 2
			top: 73, // Measured from the image.
			
			width: 28, // Width of a star.
			height: 28, // Height of a star.
			maxWidth: 350, // Max width of the total number of stars.
			
		}
	};
	return Level;
});
