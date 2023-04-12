<script>
	import { format } from "d3";
	import { guesses, clueIndex } from "$stores/misc.js";

	export let images;
	export let carousel;
	export let currentPageIndex;
</script>

<div class="dots">
	{#each images as image, i}
		{@const answered = i < $clueIndex}
		{@const disabled = i > $clueIndex}
		{@const active = i === currentPageIndex}
		{@const text = answered
			? format(",")($guesses[i]?.distance)
			: active
			? "🤔"
			: "🔒"}
		<button
			{disabled}
			data-index={i + 1}
			class:active
			on:click={() => carousel.goTo(i)}>{text}</button
		>
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
		background: gray;
	}

	@media only screen and (min-width: 400px) {
		.dots {
			padding: 0 24px;
		}
	}
</style>
