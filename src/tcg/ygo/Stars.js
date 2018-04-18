define([], function()
{
	var path = ["res", "tcg", "ygo", "star"].join("/");
	return {
		Normal:   { url: [ path, "Normal.png" ].join("/") },
		Negative: { url: [ path, "Negative.png" ].join("/") },
		Xyz:      { url: [ path, "Xyz.png" ].join("/") }
	};
});
