define(["react", "react-class", "draw/Group", "./component/All"], function Link(React, ReactClass, Group, C)
{
	var Link = ReactClass({
		render: function render()
		{
			return React.createElement(
				Group,
				this.props,
				React.createElement(C.Image, { value: this.props.image, pendulum: this.props.pendulum.enabled, rarity: this.props.rarity }),
				React.createElement(C.Border, { value: "Link", pendulum: this.props.pendulum.enabled }),
				React.createElement(C.CardName, { value: this.props.name, color: "white", rarity: this.props.rarity }),
				React.createElement(C.Attribute, { value: this.props.attribute }),

				React.createElement(C.LinkMarkers, Object.assign({pendulum: this.props.pendulum.enabled }, this.props.link) ),
				React.createElement(C.Pendulum, this.props.pendulum),

				React.createElement(C.Type, { value: this.props.type }),
				React.createElement(C.Effect, { value: this.props.effect }),
				React.createElement(C.Atk, { value: this.props.atk }),
				// Recycle the DEF value as it shouldn't appear at the same time.
				React.createElement(C.Link, { value: this.props.def }),

				React.createElement(C.Serial, { value: this.props.serial }),
				React.createElement(C.Id, { value: this.props.id, position: this.props.pendulum.enabled ? "pendulum" : "link"}),
				React.createElement(C.Copyright, { value: this.props.copyright })
			);

			//return React.createElement(Shared, Object.assign({}, this.props, { border: this.props.pendulum.enabled ? "res/tcg/ygo/border/Link.pendulum.png" : "res/tcg/ygo/border/Link.png"}))
		}
	});
	Link.displayName = "Link";
	Link.defaultProps = {
	};
	return Link;
});
