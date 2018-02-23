define([
	"./Vanilla",
	"./Effect",
	"./Ritual",
	"./Fusion",
	"./Synchro",
	"./DarkSynchro",
	"./Xyz",
	"./Link",
	"./Token"
], function ygo_template_all(Vanilla, Effect, Ritual, Fusion, Synchro, DarkSynchro, Xyz,  Link, Token)
{
	return {
		Vanilla: Vanilla,
		Effect: Effect,
		Ritual: Ritual,
		Fusion: Fusion,
		Synchro: Synchro, 
		DarkSynchro: DarkSynchro,
		Xyz: Xyz,
		Link: Link,
		Token: Token
	};
});
