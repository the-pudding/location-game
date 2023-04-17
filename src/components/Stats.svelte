<script>
	import { range, mean, groups } from "d3";
	import { onMount, getContext } from "svelte";
	import Overlay from "$components/Overlay.svelte";
	import { THRESHOLDS, stats, gameOver, best } from "$stores/misc.js";
	const copy = getContext("copy");

	export let game;

	const bins = range(THRESHOLDS.length + 1);

	$: if ($gameOver) {
		const newStat = {
			game,
			...$best
		};

		$stats = [...$stats, newStat];
	}

	$: numGames = $stats.length || undefined;
	$: distances = $stats.map((d) => d.distance);
	$: average = $stats.length ? Math.round(mean(distances)) : "no data";
	$: distanceThresholds = distances.map((d) => {
		const i = THRESHOLDS.findIndex((t) => d <= t);
		return i >= 0 ? i : THRESHOLDS.length;
	});
	$: distribution = distances.length
		? groups(distanceThresholds, (d) => d)
		: undefined;

	onMount(() => {
		// TODO remove
		if (window.location.href.includes("localhost"))
			localStorage.removeItem("pudding_location_game_stats");
	});
</script>

<Overlay section="stats">
	<h3>Your Stats</h3>
	<div class="average">
		<h4>Best guess average:</h4>
		<p>
			{average}
			{#if numGames}mi{/if}
		</p>
	</div>

	<div class="distribution">
		<h4>
			Guess distribution: {#if numGames}({numGames} games played){/if}
		</h4>
		{#if distribution}{:else}
			<p>no data</p>
		{/if}
	</div>
</Overlay>

<style>
	h4 {
		font-weight: 400;
	}
</style>
