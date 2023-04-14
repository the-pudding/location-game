<script>
	import { ChevronsUp, ChevronsDown } from "lucide-svelte";
	import Map from "$components/Guess.Map.svelte";
	import Items from "$components/Guess.Items.svelte";
	import {
		clueIndex,
		guesses,
		gameOver,
		best,
		thresholds
	} from "$stores/misc.js";
	export let latitude;
	export let longitude;

	let placed;
	let guess;
	let reveal;
	let delay;
	let firstClick;

	$: message = $gameOver
		? `Best guess: ${$best.distance} miles from the location`
		: "Place pin on map to guess";
	$: showMessage = $gameOver || !placed;
	$: showGuessPrompt = placed;
	$: isFancy = !firstClick ? "btn-fancy" : "";

	function clickGuess() {
		if (delay) return;
		delay = true;
		placed = false;
		const t = thresholds.findIndex((t) => guess.distance < t);
		const threshold = t >= 0 ? t : thresholds.length;
		const newGuess = { ...guess, i: $clueIndex, threshold };
		$guesses = [...$guesses, newGuess];
		$clueIndex += 1;
		if (!$gameOver)
			setTimeout(() => {
				delay = false;
				reveal = false;
			}, 1000);
	}

	function clickToggle() {
		if (!firstClick) firstClick = true;
		reveal = !reveal;
	}
</script>

<div class="wrapper" class:reveal>
	<div class="peak">
		<Items />
		<div class="toggle">
			<button class="btn-toggle {isFancy}" on:click={clickToggle}>
				{#if reveal}
					<ChevronsDown /> Hide map <ChevronsDown />
				{:else}
					<span><ChevronsUp /></span> Show map to guess
					<span><ChevronsUp /></span>
				{/if}
			</button>
		</div>
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
			<button class="btn-guess btn-fancy" on:click={clickGuess}>Guess!</button>
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

	.peak {
		border-top: 4px solid var(--color-bg);
	}

	.map {
		height: var(--min-map-height);
	}

	.info {
		/* border-top: 1px dashed var(--color-fg); */
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

	.btn-guess {
		width: 15rem;
		font-size: var(--24px);
	}

	.toggle {
		background: var(--color-bg);
		padding: 8px 0;
	}
	.btn-toggle {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.btn-fancy span {
		display: inline-block;
		animation: bounce 1s ease-in-out infinite;
	}

	p.message {
		font-size: var(--18px);
	}

	@media only screen and (min-height: 860px) {
		.btn-toggle {
			display: none;
		}
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		25% {
			transform: translateY(-4px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
