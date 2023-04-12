<script>
	import Carousel from "svelte-carousel";
	import Dots from "$components/Clues.Dots.svelte";
	import Images from "$components/Clues.Images.svelte";
	import mq from "$stores/mq.js";
	import { clueIndex } from "$stores/misc.js";

	export let images;

	let carousel;

	$: swiping = !$mq.desktop;
	$: arrows = $mq.desktop;

	$: carousel?.goTo($clueIndex);
</script>

<section id="images">
	<Carousel
		bind:this={carousel}
		infinite={false}
		{swiping}
		{arrows}
		let:currentPageIndex
		let:showPrevPage
		let:showNextPage
	>
		<button
			slot="prev"
			disabled={currentPageIndex === 0}
			on:click={showPrevPage}
			class="custom-arrow custom-arrow-prev"
		>
			<span>&larr;</span>
		</button>

		{#key images}
			<Images {carousel} {images} />
		{/key}

		<button
			slot="next"
			disabled={currentPageIndex + 1 > $clueIndex}
			on:click={showNextPage}
			class="custom-arrow custom-arrow-next"
		>
			<span>&rarr;</span>
		</button>

		<div class="wrapper" slot="dots">
			<Dots {carousel} {currentPageIndex} {images} />
		</div>
	</Carousel>
</section>

<style>
	section {
		background: var(--color-gray-100);
		padding: 16px 8px 32px 8px;
	}

	button.custom-arrow {
		width: 32px;
		margin: 8px 4px;
		font-size: var(--24px);
		background: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	button.custom-arrow:hover {
		background: transparent;
	}

	.wrapper {
		width: 100%;
	}
</style>
