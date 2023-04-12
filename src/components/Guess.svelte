<script>
	import Leaflet from "./Leaflet.svelte";
	export let latitude;
	export let longitude;

	let placed;

	$: message = "Place pin on map to guess";
	$: showMessage = !placed;
	$: showGuessPrompt = placed;
</script>

<section id="guess">
	{#if latitude}
		<Leaflet {latitude} {longitude} bind:placed />
	{/if}
	<div>
		{#if showMessage}
			<p class="message">{message}</p>
		{:else if showGuessPrompt}
			<button>Guess!</button>
		{/if}
	</div>
</section>

<style>
	section {
		background: #000;
		padding: 8px;
		color: var(--color-fg);
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
