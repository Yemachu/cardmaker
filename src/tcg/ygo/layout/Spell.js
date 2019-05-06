define(["react", "react-class", "draw/Group", "./component/All"], function Spell(React, ReactClass, Group, C)
{
	var Spell = ReactClass({
		render: function render()
		{
			return React.createElement(
				Group,
				this.props,
				React.createElement(C.Image, { value: this.props.image, pendulum: this.props.pendulum.enabled, rarity: this.props.rarity }),
				React.createElement(C.Border, { value: "Spell", pendulum: this.props.pendulum.enabled }),
				React.createElement(C.CardName, { value: this.props.name, color: "white", rarity: this.props.rarity }),
				React.createElement(C.Attribute, { value: this.props.attribute }),

				React.createElement(C.Pendulum, this.props.pendulum),

				React.createElement(C.Type, { value: this.props.type, type: "Backrow", icon: this.props.icon }),
				React.createElement(C.Effect, { value: this.props.effect, type: "Backrow" }),

				React.createElement(C.Serial, { value: this.props.serial }),
				React.createElement(C.Id, { value: this.props.id, position: this.props.pendulum.enabled ? "pendulum" : "regular"}),
				React.createElement(C.Copyright, { value: this.props.copyright })
			);
		}
	});
	Spell.displayName = "Spell";
	Spell.defaultProps = {

	};
	return Spell;
});
