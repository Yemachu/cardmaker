define(["react", "react-class", "draw/Group", "draw/Image", "draw/Text", "../../Icons"], function Type(React, ReactClass, Group, Image, Text, Icons)
{
	var styles = {
		Monster: {
			fontFamily: ["Spectral SC", "serif"],
			fontSize: 16,
			fontWeight: 800,
			textAlign: "left",
			whitespace: "nowrap",
			
			left: 35,
			top: 458,
			width: 350,
			height: 20
		},
		Backrow: {
			Icon:
			{
				left: 420-24-50,
				top: 74,
				width: 24,
				height: 24
			},
			Type: 
			{
				fontFamily: ["Spectral SC", "serif"],
				fontSize: 16,
				fontWeight: 800,
				textAlign: "right",
				whitespace: "nowrap",
				
				left: 40,
				top: 75,
				width: 340,
				height: 20,
			},
			TypeWithIcon:
			{
				fontFamily: ["Spectral SC", "serif"],
				fontSize: 16,
				fontWeight: 800,
				textAlign: "right",
				whitespace: "nowrap",
				
				left: 40,
				top: 75,
				width: 420 - 24/*width of icon*/ -50 /**/-40,
				height: 20
			},
			TypeWithIconClosing: {
			
				fontFamily: ["Spectral SC", "serif"],
				fontSize: 16,
				fontWeight: 800,
				textAlign: "left",
				whitespace: "nowrap",
				
				left: 420-50,
				top: 75,
				width: 10,
				height: 20
			}
		}
	};
	
	var Type = ReactClass({
		render: function render()
		{
			
			switch (this.props.type)
			{
			case "Backrow":
				var withIcon = [
					React.createElement(Text, {text: ["[", this.props.value, ""].join(" "), style: styles.Backrow.TypeWithIcon, key: "type"}),
					React.createElement(Image, {src: (Icons[this.props.icon]||{ url: ""}).url, style: styles.Backrow.Icon, key: "icon"}),
					React.createElement(Text, {text: " ]", key: "close", style: styles.Backrow.TypeWithIconClosing })
				];
			
				return React.createElement(
					Group, 
					{
						canvas: this.props.canvas, 
						repaint: this.props.repaint 
					},
					(Icons[this.props.icon] || { url: null }).url !== null
					? withIcon 
					: React.createElement(Text, { text: ["[", this.props.value, "]"].join(" "), style: styles.Backrow.Type})
				);
			case "Monster":
				return React.createElement(
					Text, 
					{
						text: ["[", this.props.value, "]"].join(" "),
						style: styles.Monster,
						canvas: this.props.canvas,
						repaint: this.props.repaint
					}
				);
			}
			return null;
		}
	});
	Type.displayName = "Circulation";
	Type.defaultProps = {
		value: "",
		icon: "None",
		type: "Monster", // The other option is "Backrow".
	};
	return Type;
});
