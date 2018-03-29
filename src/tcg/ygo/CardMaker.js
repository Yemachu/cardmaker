define(["react", "react-class", "./Card", "webfont"], function App(React, ReactClass, Card, WebFont)
{
	return ReactClass({
		
		getInitialState: function initialState()
		{
			WebFont.load({
				google: { 
					families: [
						"Buenard", 
						"Spectral SC:semi-bold,extra-bold", 
						"Amiri:italic", 
						"Audiowide", 
						"Crimson Text:bold"
					] 
				},
				fontactive: function(){this.forceUpdate();}.bind(this)
			});
			
			
			return {
				card:
				{
					name: "Neo New Card Maker",
					level: 7,
					type: "Cyberse / Pendulum / Effect",
					effect: "A card maker that supports the creation of Normal, Effect, Ritual, Fusion, Synchro, Dark Synchro, Xyz and Link monsters. It also provides support for creating Pendulum versions of some card types.",
					atk: "3000",
					def: "0",
					circulation: "This card cannot be used in a Duel.",
					copyright: "© 1993 YEMACHU",
					attribute: "None",
					pendulum: 
					{
						enabled: true,
						effect: "",
						blue: "0",
						red: "13"
					},
					link: 
					{
						enabled: false,
						topLeft: false,
						topCenter: false,
						topRight: false,
						middleLeft: false,
						middleRight: false,
						bottomLeft: true,
						bottomCenter: false,
						bottomRight: true,
					},
					layout: Card.Layout.Normal
				}
			};
		},
		
		render: function render()
		{
			var templates = [];
			var defaultValue = undefined;
			for (var key in Card.Layout)
			{
				if (Card.Layout.hasOwnProperty(key))
				{
					templates[templates.length] = React.createElement("option", { key: key }, key);
					if (Card.Layout[key] === this.state.card.layout)
					{
						defaultValue = key;
					}
				}
			}
			var attributes = [];
			
			for (var key in Card.Attributes)
			{
				if (Card.Attributes.hasOwnProperty(key))
				{
					attributes[attributes.length] = React.createElement("option", { key: key }, key);
				}
			}
			
			return React.createElement(
				"div",
				{
					className: "cardmaker ygo"
				},
				React.createElement(
					"div",
					{ className: "container", onClick: function(){alert("Clicked");} },
					React.createElement(Card, this.state.card)
				),
				React.createElement(
					"div",
					{ className: "editor" },
					React.createElement("input", { onChange: this.updateField("card.name"), type: "text", value: this.state.card.name }),
					React.createElement("input", { onChange: this.updateField("card.level"), type: "number", value: this.state.card.level }),
					React.createElement("input", { onChange: this.updateField("card.type"), type: "text", value: this.state.card.type }),
					React.createElement("textarea", { onChange: this.updateField("card.effect"), value: this.state.card.effect }),
					React.createElement("input", { onChange: this.updateField("card.atk"), type: "text", value: this.state.card.atk }),
					React.createElement("input", { onChange: this.updateField("card.def"), type: "text", value: this.state.card.def }),
					React.createElement("input", { onChange: this.updateField("card.circulation"), type: "text", value: this.state.card.circulation }),
					React.createElement("input", { onChange: this.updateField("card.copyright"), type: "text", value: this.state.card.copyright }),
					React.createElement("input", { onChange: this.updateCardImage("image"), type: "file" }),
					React.createElement("select", { onChange: this.updateField("card.attribute") }, attributes),
					React.createElement("select",  { onChange: this.updateTemplate }, templates),
					React.createElement(
						"fieldset",
						null,
						React.createElement(
							"legend",
							null,
							React.createElement("input", { id: "ccm_ygo:pendulum.enabled", onChange: function(e){this.updateField("card.pendulum.enabled")({target: {value: e.target.checked}});}.bind(this), type: "checkbox", checked: this.state.card.pendulum.enabled }),
							React.createElement("label", { htmlFor: "ccm_ygo:pendulum.enabled"}, "Pendulum" )
						),
						
						React.createElement("input", { onChange: this.updateField("card.pendulum.blue"), type: "text", value: this.state.card.pendulum.blue }),
						React.createElement("input", { onChange: this.updateField("card.pendulum.red"), type: "text", value: this.state.card.pendulum.red }),
						React.createElement("textarea", { onChange: this.updateField("card.pendulum.effect"), type: "text", value: this.state.card.pendulum.effect }),
					),
					React.createElement(
						"div",
						{ "className": "special" },
						// Serves as a means
						React.createElement("pre", null, "∞"),
						React.createElement("pre", null, "☆"),
						React.createElement("pre", null, "●")
					)
				)
			);
		},
		
		updateField: function updateField(fieldName)
		{
			var nesting = fieldName.split(".");
			return function(event)
			{
				var path = [];
				var current = this.state;
				for (var i=0; i<nesting.length; ++i)
				{
					path[path.length] = { node: current, name: nesting[i] };
					current = current[nesting[i]];
				}
				path.reverse();
				var newState = path.reduce(function(accumulator, current)
				{
					var nested = {};
					nested[current.name] = accumulator;
					return Object.assign({}, current.node, nested)
				}, event.target.value);
				this.setState(newState);
			}.bind(this)
		},
		
		updateTemplate: function(event)
		{
			this.setState({ card: Object.assign({}, this.state.card, { layout: Card.Layout[event.target.value]})});
		},
		
		updateCardImage: function(fieldName)
		{
			return function(event)
			{
				
				var files = event.target.files;
				if (FileReader && files && files.length)
				{
					var fr = new FileReader();
					fr.onload = function()
					{
						var newState = {};
						newState[fieldName] = fr.result;
						this.setState({ card: Object.assign({}, this.state.card, newState)});
					}.bind(this);
					fr.readAsDataURL(files[0]);
				}
			}.bind(this);
		}
	});
});
