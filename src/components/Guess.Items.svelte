<script>
	import { range, format } from "d3";
	import { numGuesses, guesses, clueIndex, thresholds } from "$stores/misc.js";
	import { Lock, MapPin } from "lucide-svelte";

	const getThresholdClass = (g) => {
		const d = g?.distance;
		const i = d === undefined ? undefined : thresholds.findIndex((t) => d < t);
		return i >= 0 ? i : "";
	};

	$: items = range(numGuesses);
</script>

<div class="items">
	{#each items as i}
		{@const answered = i < $clueIndex}
		{@const locked = i > $clueIndex}
		{@const current = i === $clueIndex}
		{@const text = answered ? format(",")($guesses[i]?.distance) : undefined}
		{@const thresh = answered ? getThresholdClass($guesses[i]) : ""}
		<div
			class="item threshold-{thresh}"
			data-index={i + 1}
			class:current
			class:locked
			class:answered
		>
			{#if answered}
				{text} mi
			{:else if current}<MapPin />
			{:else}
				<Lock />
			{/if}
		</div>
	{/each}
</div>

<style>
	.items {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 0;
	}

	.item {
		flex: 1;
		font-size: var(--12px);
		position: relative;
		text-align: center;
		padding: 8px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
		outline: 4px solid var(--color-bg);
		transform-origin: center center;
		z-index: var(--z-middle);
	}

	.item:first-of-type {
		transform-origin: 0 center;
	}

	.item:last-of-type {
		transform-origin: 100% center;
	}

	.item:before {
		content: attr(data-index);
		display: block;
		position: absolute;
		top: 2px;
		right: 6px;
		width: 100%;
		text-align: right;
		line-height: 1;
		pointer-events: none;
		color: var(--color-gray-600);
		font-weight: 800;
	}

	.answered {
		animation: answer 0.5s ease-in-out;
		z-index: var(--z-top);
	}

	@keyframes answer {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.33);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
