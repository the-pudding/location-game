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
				{text}
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
		border-top: 2px solid var(--color-fg);
		border-bottom: 2px solid var(--color-fg);
	}

	.item {
		flex: 1;
		font-size: var(--12px);
		position: relative;
		background: var(--color-gray-100);
		text-align: center;
		padding: 8px 0;
		border-right: 2px solid var(--color-fg);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
	}

	.item:first-of-type {
		border-left: 2px solid var(--color-fg);
		/* border-right: none; */
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
