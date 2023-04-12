<script>
	import { onMount, getContext } from "svelte";
	import { base } from "$app/paths";
	import { shuffle } from "d3";
	import loadJson from "$utils/loadJson.js";
	import Clues from "$components/Clues.svelte";
	import Guess from "$components/Guess.svelte";
	import Footer from "$components/Footer.svelte";
	import About from "$components/About.svelte";
	import Stats from "$components/Stats.svelte";

	const copy = getContext("copy");
	let data;
	let index;
	let visible;
	let game;

	$: latitude = data?.circle?.latitude;
	$: longitude = data?.circle?.longitude;
	$: images = data?.images;
	$: game = data?.game;

	onMount(async () => {
		const timestamp = Date.now();
		const url = `https://pudding.cool/games/location-data/game.json?version=${timestamp}`;
		data = await loadJson(url);
	});
</script>

<article>
	{#if data}
		<Clues {images} />
		<Guess {latitude} {longitude} />
	{/if}
	<About />
	<Stats {game} />
</article>

<style>
	article {
		max-width: 600px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		position: relative;
	}
</style>
