define([], function()
{
	var path = ["res", "tcg", "ygo", "foil"].join("/");
	return {
		common:     { name: "Common", foil: undefined },
		rare:       { name: "Rare", foil: undefined},
		secret: { name: "Secret rare", foil: [ path, "Secret.png" ].join("/") }
	};
});
