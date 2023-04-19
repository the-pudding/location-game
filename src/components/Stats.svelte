<script>
	import { range, mean, max, rollups } from "d3";
	import { onMount, getContext } from "svelte";
	import Overlay from "$components/Overlay.svelte";
	import { THRESHOLDS, stats, gameOver, best } from "$stores/misc.js";
	const copy = getContext("copy");

	export let game;

	const bins = range(THRESHOLDS.length + 1);

	$: if ($gameOver) {
		// don't overwrite game
		const match = $stats.find((d) => d.game === game);
		if (!match) {
			const newStat = {
				game,
				...$best
			};

			$stats = [...$stats, newStat];
		}
	}

	$: realStats = $stats.filter((d) => !isNaN(d.game));
	$: numGames = realStats.length || 0;
	$: distances = realStats.map((d) => d.distance);
	$: average = realStats.length ? Math.round(mean(distances)) : "no data";
	$: distanceThresholds = distances.map((d) => {
		const i = THRESHOLDS.findIndex((t) => d <= t);
		return i >= 0 ? i : THRESHOLDS.length;
	});
	$: distribution = distances.length
		? rollups(
				distanceThresholds,
				(v) => v.length,
				(d) => d
		  ).map(([threshold, count]) => ({ threshold, count }))
		: [];
	$: maxCount = max(distribution, (d) => d.count);

	onMount(() => {
		if (window.location.href.includes("localhost"))
			localStorage.removeItem("pudding_location_game_stats");
	});
</script>

<Overlay section="stats">
	<h3>Your Stats</h3>
	<div class="average">
		<p>Games played: <strong>{numGames}</strong></p>
		<p>
			Average best guess: <span>
				<strong
					>{average}
					{#if numGames}mi{/if}
				</strong>
			</span>
		</p>
	</div>

	<div class="distribution">
		<h4>Guess distribution (mi):</h4>
		{#if distribution.length}
			{#each bins as bin, i}
				{@const count =
					distribution.find((d) => d.threshold === bin)?.count || 0}
				{@const width = `${(count / maxCount) * 85}%`}
				{@const label =
					bin === THRESHOLDS.length
						? `> ${THRESHOLDS[THRESHOLDS.length - 1]}`
						: THRESHOLDS[bin]}
				<div class="bin">
					<div class="label">
						{label}
					</div>
					<div class="bar">
						<div class="inner threshold-{i}" style:width>
							<span class="count"><strong>{count}</strong></span>
						</div>
					</div>
				</div>
			{/each}
		{:else}
			<p><strong>no data</strong></p>
		{/if}
	</div>
</Overlay>

<style>
	h4 {
		font-weight: 400;
	}

	.distribution {
		margin-bottom: 16px;
	}

	.bin {
		display: flex;
		margin-bottom: 2px;
	}

	.label {
		width: 60px;
		text-align: right;
		padding-right: 8px;
	}

	.bar {
		flex: 1;
	}

	.inner {
		height: 100%;
		padding-right: 2px;
		position: relative;
	}

	.count {
		position: absolute;
		top: 0;
		right: 0;
		display: inline-block;
		padding-left: 4px;
		transform: translate(100%, 0);
		color: var(--color-fg);
	}

	strong {
		font-weight: 800;
	}
</style>
