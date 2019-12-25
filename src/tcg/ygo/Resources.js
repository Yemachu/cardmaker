define([], function()
{
	return typeof NCM_RESOURCES !== "undefined" 
	? NCM_RESOURCES 
	: "res";
});