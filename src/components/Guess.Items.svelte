<script>
	import { range, format } from "d3";
	import { numGuesses, guesses, clueIndex } from "$stores/misc.js";
	import { Lock, MapPin } from "lucide-svelte";

	$: items = range(numGuesses);
</script>

<div class="items">
	{#each items as i}
		{@const answered = i < $clueIndex}
		{@const locked = i > $clueIndex}
		{@const current = i === $clueIndex}
		{@const text = answered ? format(",")($guesses[i]?.distance) : undefined}
		<div class="item" data-index={i + 1} class:current class:locked>
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
		background: var(--color-gray-300);
		text-align: center;
		padding: 8px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
		border-right: 4px solid var(--color-bg);
	}

	.item:last-of-type {
		border-right: none;
	}

	.item:before {
		content: attr(data-index);
		display: block;
		position: absolute;
		top: 2px;
		right: 4px;
		width: 100%;
		text-align: right;
		line-height: 1;
		pointer-events: none;
		color: var(--color-gray-600);
		font-weight: 400;
	}

	.item.current {
		/* border: 2px solid var(--color-mark); */
	}
</style>
