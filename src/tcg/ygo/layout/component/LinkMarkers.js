define(["react", "react-class", "draw/Group", "draw/Image", "../../Resources"], function LinkMarkers(React, ReactClass, Group, Image, Resources)
{
	var positioning = {
		regular: {
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
		},
		pendulum: {
			topLeft: {
				top: 95,
				left: 16,
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
				left: 420 - 16 - 42,
				width: 42,
				height: 42
			},
			middleLeft: {
				top: 302,
				left: 6,
				width: 25,
				height: 72
			},
			middleRight: {
				top: 302,
				left: 420 - 6 -25,
				width: 25,
				height: 72
			},
			bottomLeft: {
				top: 610 - 23 - 42,
				left: 16,
				width: 42,
				height: 42
			},
			bottomCenter: {
				top: 610 - 13 - 25,
				left:(420/2) - (72/2),
				width:72,
				height: 25
			},
			bottomRight: {
				top: 610 - 23 - 42,
				left: 420 - 16 - 42,
				width: 42,
				height: 42
			}
		}
	};

	var path = Resources + "/tcg/ygo/marker";
	var LinkMarkers = ReactClass({
		render: function render()
		{
			var e = React.createElement;
			var children = [];

			var pos = positioning[this.props.pendulum ? "pendulum" : "regular"];
			for(var key in pos)
			{
				if (pos.hasOwnProperty(key) && this.props.hasOwnProperty(key))
				{
					if (this.props[key] === true)
					{
						children[children.length] = e(Image, { key: key, src:("" + path + "/" + key + ".png"), style: pos[key] });
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
		pendulumm: false,
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
