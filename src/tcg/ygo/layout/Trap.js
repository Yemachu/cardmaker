define(["react", "react-class", "draw/Group", "./component/All"], function Trap(React, ReactClass, Group, C)
{
	var Trap = ReactClass({
		render: function render()
		{
			return React.createElement(
				Group,
				this.props,
				React.createElement(C.Image, { value: this.props.image }),
				React.createElement(C.Border, { value: "Trap" }),
				React.createElement(C.CardName, { value: this.props.name, color: "white" }),
				React.createElement(C.Attribute, { value: this.props.attribute }),
				
				React.createElement(C.Type, { value: this.props.type, type: "Backrow" }),
				React.createElement(C.Effect, { value: this.props.effect, type: "Backrow" }),
				
				React.createElement(C.Serial, { value: this.props.serial }),
				React.createElement(C.Copyright, { value: this.props.copyright })
			);
		}
	});
	Trap.displayName = "Trap";
	Trap.defaultProps = {
		
	};
	return Trap;
});
