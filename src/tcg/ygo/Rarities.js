define(["./Resources"], function(resources)
{
	var path = [resources, "tcg", "ygo", "foil"].join("/");
	return {
		common:     { name: "Common", foil: undefined, color: undefined },
		rare:       { name: "Rare", foil: undefined, color: "silver"},
		ultra: { name: "Ultra rare", foil: [ path, "Secret.png" ].join("/"), color: "gold" },
		secret: { name: "Secret rare", foil: [ path, "Secret.png" ].join("/"), color: "silver" },
	};
});
