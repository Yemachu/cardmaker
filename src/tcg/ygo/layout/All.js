define([
	"./Vanilla",
	"./Effect",
	"./Ritual",
	"./Fusion",
	"./Synchro",
	"./DarkSynchro",
	"./Xyz",
	"./Link",
	"./Token",
	"./Spell",
	"./Trap"
], function ygo_template_all(Vanilla, Effect, Ritual, Fusion, Synchro, DarkSynchro, Xyz,  Link, Token, Spell, Trap)
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
		Token: Token,
		Spell: Spell,
		Trap: Trap
	};
});
