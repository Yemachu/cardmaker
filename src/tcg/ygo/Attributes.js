define(["./Resources"], function Attributes(resources)
{
	var path = [resources, "tcg", "ygo", "attribute"].join("/");
	return {
		None:   { url: undefined },
		Dark:   { url: [path, "Dark.png"].join("/") },
		Divine: { url: [path, "Divine.png"].join("/") },
		Earth:  { url: [path, "Earth.png"].join("/") },
		Fire:   { url: [path, "Fire.png"].join("/") },
		Light:  { url: [path, "Light.png"].join("/") },
		Water:  { url: [path, "Water.png"].join("/") },
		Wind:   { url: [path, "Wind.png"].join("/") },
		Spell:  { url: [path, "Spell.png"].join("/") },
		Trap:   { url: [path, "Trap.png"].join("/") },
	};
});
