define(["react", "react-class", "draw/Group", "draw/Image"], function LinkMarkers(React, ReactClass, Group, Image)
{
	var positioning = {
		topLeft: { 
			top: 95,
			left: 32,
			width: 42,
			height: 42
		},
		topCenter: {
			top: 86,
			left:(420/2) - (72/2),
			width:72,
			height: 25
		},
		topRight: {
			top: 95,
			left: 420 - 32 - 42,
			width: 42,
			height: 42
		},
		middleLeft: {
			top: 235,
			left: 26,
			width: 25,
			height: 72
		},
		middleRight: {
			top: 235,
			left: 420 - 26 -25,
			width: 25,
			height: 72
		},
		bottomLeft: { 
			top: 402,
			left: 32,
			width: 42,
			height: 42
		},
		bottomCenter: {
			top: 428,
			left:(420/2) - (72/2),
			width:72,
			height: 25
		},
		bottomRight: {
			top: 402,
			left: 420 - 32 - 42,
			width: 42,
			height: 42
		}
	};
	
	var path = "res/tcg/ygo/marker";
	var LinkMarkers = ReactClass({
		render: function render()
		{
			var e = React.createElement;
			var children = [];
			
			for(var key in positioning)
			{
				if (positioning.hasOwnProperty(key) && this.props.hasOwnProperty(key))
				{
					if (this.props[key] === true)
					{
						children[children.length] = e(Image, { key: key, src:("" + path + "/" + key + ".png"), style: positioning[key] });
					}
				}
			}
			
			return React.createElement(
				Group, 
				{ 
					text: this.props.value,
					repaint: this.props.repaint, 
					canvas: this.props.canvas 
				},
				children
			);
		}
	});
	
	LinkMarkers.displayName = "LinkMarkers";
	LinkMarkers.defaultProps = {
		topLeft: false,
		topCenter: false,
		topRight: false,
		middleLeft: false,
		middleRight: false,
		bottomLeft: false,
		bottomCenter: false,
		bottomRight: false
	}
	return LinkMarkers;
});
