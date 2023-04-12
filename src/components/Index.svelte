<script>
	import { onMount, getContext } from "svelte";
	import { base } from "$app/paths";
	import { shuffle } from "d3";
	import loadJson from "$utils/loadJson.js";
	import Images from "$components/Images.svelte";
	import Guess from "$components/Guess.svelte";
	import Footer from "$components/Footer.svelte";

	const copy = getContext("copy");
	let data;
	let index;
	let visible;

	$: latitude = data?.circle?.latitude;
	$: longitude = data?.circle?.longitude;
	$: images = data?.images;

	onMount(async () => {
		const timestamp = Date.now();
		const url = `https://pudding.cool/games/location-data/game.json?version=${timestamp}`;
		data = await loadJson(url);
	});
</script>

<article>
	{#if data}
		<Images {images} />
		<Guess {latitude} {longitude} />
	{/if}
</article>

<style>
	article {
		max-width: 600px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
</style>
