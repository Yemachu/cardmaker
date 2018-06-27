define(["tcg/CardMaker"], function App(CardMaker)
{
	return function App(root)
	{
		new CardMaker(root);
	}
});
