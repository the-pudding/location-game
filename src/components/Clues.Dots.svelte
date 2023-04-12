<script>
	import { format } from "d3";
	import { guesses, clueIndex } from "$stores/misc.js";
	import { Lock, MapPin } from "lucide-svelte";

	export let images;
	export let carousel;
	export let currentPageIndex;
</script>

<div class="dots">
	{#each images as image, i}
		{@const answered = i < $clueIndex}
		{@const disabled = i > $clueIndex}
		{@const current = i === $clueIndex}
		{@const active = i === currentPageIndex}
		{@const text = answered ? format(",")($guesses[i]?.distance) : undefined}
		<button
			{disabled}
			data-index={i + 1}
			class:active
			on:click={() => carousel.goTo(i)}
		>
			{#if answered}
				{text}
			{:else if current}<MapPin />
			{:else}
				<Lock />
			{/if}
		</button>
	{/each}
</div>

<style>
	.dots {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 0;
	}

	button {
		flex: 1;
		margin: 0 4px;
		font-size: var(--12px);
		position: relative;
		border: 2px solid transparent;
	}

	button:after {
		content: attr(data-index);
		display: block;
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 100%;
		text-align: center;
		transform: translate(0, 100%);
		line-height: 1;
		pointer-events: none;
	}

	button.active {
		border: 2px solid var(--color-fg);
	}

	@media only screen and (min-width: 400px) {
		.dots {
			padding: 0 24px;
		}
	}
</style>
