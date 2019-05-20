define(["react", "react-class", "draw/Group", "./component/All"], function Trap(React, ReactClass, Group, C)
{
	var Skill = ReactClass({
		render: function render()
		{
			return React.createElement(
				Group,
				this.props,
				React.createElement(C.Image, { value: this.props.image, rarity: this.props.rarity }),
				React.createElement(C.Border, { value: "Skill" }),
				React.createElement(C.CardName, { value: this.props.name, color: "white", rarity: this.props.rarity, type: "skill" }),

				React.createElement(C.Type, { value: this.props.type }),
				React.createElement(C.Effect, { value: this.props.effect, type: "Skill" }),

				React.createElement(C.Serial, { value: this.props.serial, color: "white"  }),
				React.createElement(C.Id, { value: this.props.id, position: "regular", color: "white" }),
				React.createElement(C.Copyright, { value: this.props.copyright, color: "white"  })
			);
		}
	});
	Skill.displayName = "Skill";
	Skill.defaultProps = {

	};
	return Skill;
});
