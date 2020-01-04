define(["react", "react-class", "./Card", "webfont", "./Checkbox"], function App(React, ReactClass, Card, WebFont, Checkbox)
{
	var emptyCard = {
		version: "1.2.0",
		rarity: "Common",
		name: "",
		level: 0,
		type: "",
		effect: "",
		atk: "",
		def: "",
		serial: "This card cannot be used in a Duel.",
		copyright: "© 1993 YEMACHU",
		id: "",
		attribute: "None",
		pendulum:
		{
			enabled: false,
			effect: "",
			blue: "5",
			red: "5"
		},
		link:
		{
			topLeft: false,
			topCenter: false,
			topRight: false,
			middleLeft: false,
			middleRight: false,
			bottomLeft: false,
			bottomCenter: false,
			bottomRight: false,
		},
		layout: "Normal"
	}

	return ReactClass({

		getInitialState: function initialState()
		{
		// Custom card maker state.
			var saveDataKey = "ccms";
			window.addEventListener("beforeunload", function(e){
				localStorage.setItem(saveDataKey, JSON.stringify(this.state));
			}.bind(this));

			var savedata = JSON.parse(localStorage.getItem(saveDataKey));
			console.log(savedata);
			var defaultdata = {
				card:
				{
					version: "1.0.0",
					name: "Neo New Card Maker",
					level: 4,
					type: "Cyberse / Pendulum",
					icon: "None",
					effect: "A card maker that supports the creation of Normal, Effect, Ritual, Fusion, Synchro, Dark Synchro, Xyz and Link monsters. It also provides support for creating Pendulum versions of some card types.",
					atk: "0",
					def: "0",
					serial: "This card cannot be used in a Duel.",
					copyright: "© 1993 YEMACHU",
					attribute: "None",
					id: "YCM - EN000",
					pendulum:
					{
						enabled: true,
						effect: "",
						blue: "5",
						red: "5"
					},
					link:
					{
						topLeft: false,
						topCenter: false,
						topRight: false,
						middleLeft: false,
						middleRight: false,
						bottomLeft: false,
						bottomCenter: false,
						bottomRight: false,
					},
					layout: "Normal"
				}
			};

			WebFont.load({
				google: {
					families: [
						"Buenard",
						"Spectral SC:semi-bold,extra-bold",
						"Spectral",
						"Amiri:italic",
						"Audiowide",
						"Crimson Text:semi-bold,bold",
						"Heebo:medium"
					]
				},
				fontactive: function(){this.forceUpdate();}.bind(this)
			});


			return Object.assign({}, defaultdata, savedata);
		},

		render: function render()
		{
			function makeSelect(data)
			{
				var options = [];
				for (var key in data)
				{
					if (data.hasOwnProperty(key))
					{
						element = data[key] || {};
						options[options.length] = React.createElement
						(
							"option",
							{
								key: key,
								value: typeof element.value !== "undefined" ? element.value : key
							},
							element.name || key);
					}
				}
				return options;
			}

			var templates = makeSelect(Card.Layout);
			var attributes = makeSelect(Card.Attributes);
			var icons = makeSelect(Card.Icons);
			var rarities = makeSelect(Card.Rarities);

			var e = React.createElement;
			return e(
				"div",
				{
					className: "cardmaker ygo"
				},
				e(
					"div",
					{ className: "live-preview" },
					e(Card, this.state.card)
				),
				e(
					"div",
					{ className: "editor" },

					e("button", { onClick: this.create, className: "ipsButton ipsButton_primary"}, "New"),
					e("button", { onClick: this.save, className: "ipsButton ipsButton_primary" }, "Save"),
					e("button", { onClick: this.open, className: "ipsButton ipsButton_primary" }, "Open"),

					e("label", null, "Name",  e("input", { onChange: this.updateField("card.name"), type: "text", value: this.state.card.name })),
					e("label", null, "Rarity", e("select", { onChange: this.updateField("card.rarity"), value: this.state.card.rarity }, rarities)),
					e("label", null, "Template", e("select",  { onChange: this.updateField("card.layout"), value: this.state.card.layout }, templates)),
					e("label", null, "Attribute", e("select", { onChange: this.updateField("card.attribute"), value: this.state.card.attribute }, attributes)),
					e("label", null, "Level", e("input", { onChange: this.updateField("card.level"), type: "number", value: this.state.card.level })),

					e("label", null, "Image", e("input", { onChange: this.updateField("card.image"), type: "text" }), e("input", { onChange: this.updateCardImage("image"), type: "file" })),

					e("label", null, "Type",  e("input", { onChange: this.updateField("card.type"), type: "text", value: this.state.card.type })),
					e("label", null, "Icon", e("select", { onChange: this.updateField("card.icon"), value: this.state.card.icon }, icons)),
					e("label", null, "Effect", e("textarea", { onChange: this.updateField("card.effect"), value: this.state.card.effect })),

					e("label", null, "Attack", e("input", { onChange: this.updateField("card.atk"), type: "text", value: this.state.card.atk })),
					e("label", null, "Defense and/or Link", e("input", { onChange: this.updateField("card.def"), type: "text", value: this.state.card.def })),
					e("label", null, "Set id", e("input", { onChange: this.updateField("card.id"), type: "text", value: this.state.card.id })),
					e("label", null, "Serial number", e("input", { onChange: this.updateField("card.serial"), type: "text", value: this.state.card.serial })),
					e("button", {onClick: this.randomizeSerialNumber ,className: "ipsButton ipsButton_primary" }, "Randomize"),
					e("label", null, "Copyright", e("input", { onChange: this.updateField("card.copyright"), type: "text", value: this.state.card.copyright })),


					e(
						"fieldset",
						null,
						e(
							"legend",
							null,
							e(Checkbox, { id: "ccm_ygo:pendulum.enabled", onChange: function(e){this.updateField("card.pendulum.enabled")({target: {value: e.target.checked}});}.bind(this), type: "checkbox", checked: this.state.card.pendulum.enabled }),
							e("label", { htmlFor: "ccm_ygo:pendulum.enabled"}, "Pendulum" )
						),

						e("label", null, "Blue scale", e("input", { onChange: this.updateField("card.pendulum.blue"), type: "text", value: this.state.card.pendulum.blue })),
						e("label", null, "Red scale", e("input", { onChange: this.updateField("card.pendulum.red"), type: "text", value: this.state.card.pendulum.red })),
						e("label", null, "Effect", e("textarea", { onChange: this.updateField("card.pendulum.effect"), type: "text", value: this.state.card.pendulum.effect }))
					),

					e(
						"fieldset",
						null,
						e("legend", null, e("label", {}, "Link")),
						e("table", null,e("tbody",null,
							e("tr", null,
								e("td", null,
									e(Checkbox, { id: "ccm_ygo:link.topLeft", onChange: function(e){this.updateField("card.link.topLeft")({target: {value: e.target.checked}});}.bind(this), checked: this.state.card.link.topLeft }),
									e("label", { htmlFor: "ccm_ygo:link.topLeft"}, "")
								),
								e("td", null,
									e(Checkbox, { id: "ccm_ygo:link.topCenter", onChange: function(e){this.updateField("card.link.topCenter")({target: {value: e.target.checked}});}.bind(this), checked: this.state.card.link.topCenter }),
									e("label", { htmlFor: "ccm_ygo:link.topCenter"}, "" )
								),
								e("td", null,
									e(Checkbox, { id: "ccm_ygo:link.topRight", onChange: function(e){this.updateField("card.link.topRight")({target: {value: e.target.checked}});}.bind(this), checked: this.state.card.link.topRight }),
									e("label", { htmlFor: "ccm_ygo:link.topRight"}, "" )
								)
							),
							e("tr", null,
								e("td", null,
									e(Checkbox, { id: "ccm_ygo:link.middleLeft", onChange: function(e){this.updateField("card.link.middleLeft")({target: {value: e.target.checked}});}.bind(this), checked: this.state.card.link.middleLeft }),
									e("label", { htmlFor: "ccm_ygo:link.middleLeft"}, "")
								),
								e("td"),
								e("td", null,
									e(Checkbox, { id: "ccm_ygo:link.middleRight", onChange: function(e){this.updateField("card.link.middleRight")({target: {value: e.target.checked}});}.bind(this), checked: this.state.card.link.middleRight }),
									e("label", { htmlFor: "ccm_ygo:link.middleRight"}, "" )
								)
							),
							e("tr", null,
								e("td", null,
									e(Checkbox, { id: "ccm_ygo:link.bottomLeft", onChange: function(e){this.updateField("card.link.bottomLeft")({target: {value: e.target.checked}});}.bind(this), checked: this.state.card.link.bottomLeft }),
									e("label", { htmlFor: "ccm_ygo:link.bottomLeft"}, "")
								),
								e("td", null,
									e(Checkbox, { id: "ccm_ygo:link.bottomCenter", onChange: function(e){this.updateField("card.link.bottomCenter")({target: {value: e.target.checked}});}.bind(this), checked: this.state.card.link.bottomCenter }),
									e("label", { htmlFor: "ccm_ygo:link.bottomCenter"}, "" )
								),
								e("td", null,
									e(Checkbox, { id: "ccm_ygo:link.bottomRight", onChange: function(e){this.updateField("card.link.bottomRight")({target: {value: e.target.checked}});}.bind(this), checked: this.state.card.link.bottomRight }),
									e("label", { htmlFor: "ccm_ygo:link.bottomRight"}, "" )
								)
							)
						))
					),

					e("pre", { "className": "special" }, "∞\n", "☆\n", "●\n")
				)
			);
		},
		create: function create()
		{
			this.setState({ card: emptyCard });
		},

		save: function save()
		{
			var link = document.createElement("a");
			link.setAttribute("href", "data:/text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state.card)));
			link.setAttribute("download", (this.state.card.name || "Card") + ".json");
			if (document.createEvent)
			{
				var evt = document.createEvent("MouseEvent");
				evt.initEvent("click", true, true);
				link.dispatchEvent(evt);
			}
			else
			{
				link.click();
			}
		},

		open: function()
		{
			var file = document.createElement("input");
			file.setAttribute("type", "file");
			file.setAttribute("accept", ".json");
			file.addEventListener("change", function(evt)
			{
				var files = evt.target.files;
				if (FileReader && files.length)
				{
					var fr = new FileReader();
					fr.onload = function()
					{
						try
						{
							var card = JSON.parse(fr.result);
							console.log(card);
							this.setState({ card: card });
						}catch(e)
						{
							console.error(e);
						}
					}.bind(this);
					fr.readAsText(files[0]);
				}
			}.bind(this));
			if (document.createEvent)
			{
				var evt = document.createEvent("MouseEvent");
				evt.initEvent("click", true, true);
				file.dispatchEvent(evt);
			}
			else
			{
				link.click();
			}
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
		},

		randomizeSerialNumber: function()
		{
			var value = "0000000000" + (Math.random() * 10000000000).toFixed(0);
			console.log(typeof value);

			this.updateField("card.serial")({target:{value: value.substring(value.length-10)}});
		}
	});
});
