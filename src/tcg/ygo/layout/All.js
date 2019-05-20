define([
	"./Normal",
	"./Effect",
	"./Ritual",
	"./Fusion",
	"./Synchro",
	"./DarkSynchro",
	"./Unity",
	"./Xyz",
	"./Link",
	"./Token",
	"./Spell",
	"./Trap",
	"./Skill"
], function ygo_template_all(Normal, Effect, Ritual, Fusion, Synchro, DarkSynchro, Unity, Xyz,  Link, Token, Spell, Trap, Skill)
{
	return {
		Normal: { value: "Normal", fn: Normal },
		Effect: { value: "Effect", fn: Effect },
		Ritual: { value: "Ritual", fn: Ritual },
		Fusion: { value: "Fusion", fn: Fusion },
		Synchro: { value: "Synchro", fn:Synchro },
		DarkSynchro: { value: "DarkSynchro", name: "Dark Synchro", fn: DarkSynchro },
		Xyz: { value: "Xyz", fn: Xyz },
		Unity: { value: "Unity", fn: Unity },
		Link: { value: "Link", fn: Link },
		Token: { value: "Token", fn: Token },
		Spell: { value: "Spell", fn: Spell },
		Trap: { value: "Trap", fn: Trap },
		Skill: { value: "Skill", fn: Skill }
	};
});
