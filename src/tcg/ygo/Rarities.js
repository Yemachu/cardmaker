define([], function()
{
	var path = ["res", "tcg", "ygo", "foil"].join("/");
	return {
		Common:     { name: "Common", foil: undefined },
		Rare:       { name: "Rare", foil: undefined},
		SecretRare: { name: "Secret rare", foil: [ path, "Secret.png" ].join("/") }
	};
});
