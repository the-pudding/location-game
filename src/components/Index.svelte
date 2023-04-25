<script>
	import { onMount, getContext } from "svelte";
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import { shuffle } from "d3";
	import { currentGame } from "$stores/misc.js";
	import loadJson from "$utils/loadJson.js";
	import Clues from "$components/Clues.svelte";
	import Guess from "$components/Guess.svelte";
	import Footer from "$components/Footer.svelte";
	import About from "$components/About.svelte";
	import Stats from "$components/Stats.svelte";
	import { decode } from "$utils/encrypt.js";

	const copy = getContext("copy");
	const baseUrl = "https://pudding.cool/games/where-data";
	let data;
	let index;
	let visible;
	let game;

	$: game = $currentGame?.game;
	$: latitude = data?.circle?.latitude;
	$: longitude = data?.circle?.longitude;
	$: images = data?.images;

	const onResize = () => {
		const prop = "--doc-height";
		const val = `${window.innerHeight}px`;
		document.documentElement.style.setProperty(prop, val);
	};

	onMount(async () => {
		window.addEventListener("resize", onResize);
		onResize();

		const rs = $page.url.search.split("rs=")[1];
		const override = rs?.split("&")[0];

		const timestamp = Date.now();

		if (override) {
			const id = decode(override);
			$currentGame = { game: id };
			window.history.replaceState({}, "", `${window.location.pathname}`);
		} else
			$currentGame = await loadJson(
				`${baseUrl}/current.json?version=${timestamp}`
			);

		const gameUrl = `${baseUrl}/games/${$currentGame.game}.json?version=${timestamp}`;
		data = await loadJson(gameUrl);
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
