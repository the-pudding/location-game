<script>
	import Leaflet from "./Leaflet.svelte";
	import { clueIndex, guesses, gameOver, best } from "$stores/misc.js";
	export let latitude;
	export let longitude;

	let placed;
	let guess;

	$: message = $gameOver
		? `Best guess: ${$best.distance} miles from the location`
		: "Place pin on map to guess";
	$: showMessage = $gameOver || !placed;
	$: showGuessPrompt = placed;

	function clickGuess() {
		placed = false;
		const newGuess = { ...guess, i: $clueIndex };
		$guesses = [...$guesses, newGuess];
		$clueIndex += 1;
	}
</script>

<section id="guess">
	{#if latitude}
		<Leaflet {latitude} {longitude} bind:placed bind:guess />
	{/if}
	<div>
		{#if showMessage}
			<p class="message">{message}</p>
		{:else if showGuessPrompt}
			<button on:click={clickGuess}>Guess!</button>
		{/if}
	</div>
</section>

<style>
	section {
		background: var(--color-gray-900);
		padding: 8px;
	}

	div {
		padding: 8px;
		padding-top: 16px;
		text-align: center;
	}

	p {
		margin: 0;
		line-height: 1;
		color: var(--color-bg);
		text-align: center;
	}

	button {
		background: var(--color-bg);
		color: var(--color-fg);
	}

	button:hover {
		background: var(--color-gray-100);
	}
</style>
