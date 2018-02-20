define(["react", "react-class", "./Card"], function App(React, ReactClass, Card)
{
	return ReactClass({
		
		getInitialState: function initialState()
		{
			return {
				card:
				{
					name: "Name",
					level: 0,
					type: "[Type]",
					effect: "Effect",
					atk: "?",
					def: "?",
					circulation: "Circulation",
					image: "",
					border: "",
					attribute: "",
					
				}
			};
		},
		
		render: function render()
		{
			return React.createElement(
				"div",
				{
					className: "cardmaker ygo"
				},
				React.createElement(Card, this.state.card),
				React.createElement(
					"div",
					null,
					React.createElement("input", { onChange: this.updateCardField("name"), type: "text", value: this.state.card.name }),
					React.createElement("input", { onChange: this.updateCardField("level"), type: "number", value: this.state.card.level }),
					React.createElement("input", { onChange: this.updateCardField("type"), type: "text", value: this.state.card.type }),
					React.createElement("textarea", { onChange: this.updateCardField("effect"), value: this.state.card.effect }),
					React.createElement("input", { onChange: this.updateCardField("atk"), type: "text", value: this.state.card.atk }),
					React.createElement("input", { onChange: this.updateCardField("def"), type: "text", value: this.state.card.def }),
					React.createElement("input", { onChange: this.updateCardImage("image"), type: "file" }),
					React.createElement("input", { onChange: this.updateCardImage("border"), type: "file" }),
					React.createElement("input", { onChange: this.updateCardImage("attribute"), type: "file" }),
				)
			);
		},
		
		updateCardField: function(fieldName)
		{
			return function(event)
			{
				var newState = {};
				newState[fieldName] = event.target.value;
				this.setState({ card: Object.assign({}, this.state.card, newState)});
			}.bind(this);
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
