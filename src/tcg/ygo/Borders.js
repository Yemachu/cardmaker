define([], function Borders()
{
	var path = ["res", "tcg", "ygo", "border"].join("/");
	return {
		Normal:      { url: [path, "Normal.png"].join("/") },
		Effect:      { url: [path, "Effect.png"].join("/") },
		Ritual:      { url: [path, "Ritual.png"].join("/") },
		Fusion:      { url: [path, "Fusion.png"].join("/") },
		Synchro:     { url: [path, "Synchro.png"].join("/") },
		DarkSynchro: { url: [path, "DarkSynchro.png"].join("/") },
		Xyz:         { url: [path, "Xyz.png"].join("/") },
		Link:        { url: [path, "Link.png"].join("/") },
		Token:       { url: [path, "Token.png"].join("/") },
		Spell:       { url: [path, "Spell.png"].join("/") },
		Trap:        { url: [path, "Trap.png"].join("/") },
	};
})
