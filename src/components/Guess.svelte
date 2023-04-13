<script>
	import { ChevronsUp, ChevronsDown } from "lucide-svelte";
	import Map from "$components/Guess.Map.svelte";
	import Items from "$components/Guess.Items.svelte";
	import { clueIndex, guesses, gameOver, best } from "$stores/misc.js";
	export let latitude;
	export let longitude;

	let placed;
	let guess;
	let reveal;

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

	function clickToggle() {
		reveal = !reveal;
	}
</script>

<div class="wrapper" class:reveal>
	<div class="peak">
		<button class="toggle" on:click={clickToggle}>
			{#if reveal}
				<ChevronsDown /> Hide map <ChevronsDown />
			{:else}
				<ChevronsUp /> Show map to guess <ChevronsUp />
			{/if}
		</button>
		<Items />
	</div>
	{#if latitude}
		<div class="map">
			<Map {latitude} {longitude} bind:placed bind:guess />
		</div>
	{/if}
	<div class="info">
		{#if showMessage}
			<p class="message">{message}</p>
		{:else if showGuessPrompt}
			<button class="guess" on:click={clickGuess}>Guess!</button>
		{/if}
	</div>
</div>

<style>
	.wrapper {
		--info-height: 64px;
		display: flex;
		flex-direction: column;
		/* height: 100%; */
		/* max-height: 480px; */
		min-height: calc(--peak-height + var(--info-height) + var(--map-height));
		transition: transform 0.25s ease-in-out;
		transform: translate3d(0, 0, 0);
	}

	.wrapper.reveal {
		transform: translate3d(0, calc(-100% + var(--peak-height)), 0);
	}

	.map {
		height: var(--min-map-height);
	}

	.info {
		border-top: 2px solid var(--color-fg);
		padding: 8px;
		text-align: center;
		height: var(--info-height);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	p {
		margin: 0;
		line-height: 1;
		text-align: center;
	}

	button.guess {
		width: 15rem;
		font-size: var(--24px);
	}

	button.toggle {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media only screen and (min-height: 860px) {
		button.toggle {
			display: none;
		}
	}
</style>
