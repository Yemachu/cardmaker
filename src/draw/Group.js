define(["react", "react-class"], function Group(React, ReactClass)
{
	/**
	 * Container for various "draw/*" components.
	 *
	 * This component makes sure its descendants have a canvas available to them,
	 * and provides a method to them which they can use for updating the hierarchy.
	 * This due to sorting order.
	 */
	var Group = ReactClass({
		
		render: function render()
		{
			// Provide the over-arching canvas to all descendants of this element.
			var children = this.props.children;
			var canvas = this.props.canvas;
			var repaint = this.props.repaint || this.repaint;
			
			children = React.Children.map(children, function(child)
			{
					return React.cloneElement(child, { canvas: canvas, repaint: repaint });
			});
			
			// Create the group.
			return React.createElement("div", {style: {position: "relative"}}, children);
		},
		
		componentWillUpdate: function()
		{
			if (this.props.repaint !== "function")
			{
				this.r = true;
				var canvas = this.props.canvas;
				if (canvas !== null)
				{
					var ctx = canvas.getContext("2d");
					ctx.fillStyle = "#fff";
					ctx.fillRect(0,0,canvas.width, canvas.height);
					//ctx.clearRect(0,0,canvas.width, canvas.height);
				}
			}
		},
		
		/**
		 * Indicates that the hierarchy should be redrawn.
		 *
		 * This function is passed down to the children, so they can indicate the
		 * hierarchy should be redrawn. Letting only the relevant child redraw 
		 * itself might cause issues with sorting order.
		 */
		repaint: function repaint()
		{
			// Determine whether this group is in the top of the hierarchy.
			if (typeof this.props.repaint !== "function")
			{
				// If it is, no further propagation is needed.
				this.forceUpdate();
			}
			else
			{
				this.props.repaint();
			}
		}
	});
	Group.displayName = "Group";
	Group.defaultProps = {
		
	};
	return Group;
});
