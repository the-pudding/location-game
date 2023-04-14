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

	// const c1 = ["#fbb4b9", "#f768a1", "#ae017e"];
	// const c2 = ["#cc9f8b", "#d3d4d4", "#fcb031"];
	$: latitude = data?.circle?.latitude;
	$: longitude = data?.circle?.longitude;
	$: images = data?.images;
	$: game = data?.game;

	const onResize = () => {
		const prop = "--doc-height";
		const val = `${window.innerHeight}px`;
		document.documentElement.style.setProperty(prop, val);
	};

	onMount(async () => {
		window.addEventListener("resize", onResize);
		onResize();

		const timestamp = Date.now();
		const url = `https://pudding.cool/games/location-data/game.json?version=${timestamp}`;
		data = await loadJson(url);
	});
</script>

<article>
	{#if data}
		<section id="clues">
			<Clues {images} />
		</section>
		<section id="guess">
			<Guess {latitude} {longitude} />
		</section>
	{/if}
	<About />
	<Stats {game} />
</article>

<style>
	article {
		--map-height: 280px;
		max-width: 600px;
		margin: 0 auto;
		padding: 0 8px;
		display: flex;
		flex-direction: column;
		position: relative;
		height: 100%;
	}

	section {
		flex: 1;
	}

	#clues {
		z-index: var(--z-middle);
	}

	#guess {
		z-index: var(--z-top);
		height: var(--peak-height);
		flex: 0;
	}

	@media only screen and (min-height: 860px) {
		#guess {
			height: auto;
		}
	}

	@media only screen and (min-height: 1080px) {
		#guess {
			--map-height: 320px;
		}
	}
</style>
