define(["./Resources"], function(resources)
{
	var path = [resources, "tcg", "ygo", "icon"].join("/");
	return {
		"None": { url: null },
		"Continuous":      { url: [ path, "Continuous.png" ].join("/") },
		"Counter": { url: [ path, "Counter.png" ].join("/") },
		"Equip":   { url: [ path, "Equip.png" ].join("/") },
		"Field":   { url: [ path, "Field.png" ].join("/") },
		"Quick-play":   { url: [ path, "Quick-play.png" ].join("/") },
		"Ritual":   { url: [ path, "Ritual.png" ].join("/") },
	};
});
