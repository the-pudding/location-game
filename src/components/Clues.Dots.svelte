<script>
	export let images;
	export let carousel;
	export let currentPageIndex;
</script>

<div class="dots">
	{#each images as image, i}
		<button
			data-index={i + 1}
			class:active={i === currentPageIndex}
			on:click={() => carousel.goTo(i)}>?</button
		>
	{/each}
</div>

<style>
	.dots {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 0 24px;
	}

	button {
		flex: 1;
		margin: 0 8px;
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
</style>
