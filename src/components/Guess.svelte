<script>
	import Map from "$components/Guess.Map.svelte";
	import Items from "$components/Guess.Items.svelte";
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

<div class="wrapper">
	{#if latitude}
		<Items />
		<Map {latitude} {longitude} bind:placed bind:guess />
	{/if}
	<div class="info">
		{#if showMessage}
			<p class="message">{message}</p>
		{:else if showGuessPrompt}
			<button on:click={clickGuess}>Guess!</button>
		{/if}
	</div>
</div>

<style>
	.info {
		border-top: 2px solid var(--color-fg);
		background: var(--color-gray-100);
		padding: 8px;
		text-align: center;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	p {
		margin: 0;
		line-height: 1;
		text-align: center;
	}

	button {
		width: 10rem;
	}
</style>
