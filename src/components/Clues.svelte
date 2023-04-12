<script>
	import Carousel from "svelte-carousel";
	import Images from "$components/Clues.Images.svelte";
	import mq from "$stores/mq.js";
	import { clueIndex } from "$stores/misc.js";

	export let images;

	let carousel;
	let pageIndex = 1;

	const dots = false;

	function onPageChange(e) {
		pageIndex = e.detail + 1;
	}

	$: swiping = !$mq.desktop;
	$: arrows = $mq.desktop;
	$: carousel?.goTo($clueIndex);
</script>

<section id="images">
	<div class="info">
		<p>Five images. Five guesses. One location.</p>
		<p class="counter">Image {pageIndex} of 5</p>
	</div>
	<Carousel
		bind:this={carousel}
		infinite={false}
		{swiping}
		{arrows}
		{dots}
		let:currentPageIndex
		let:showPrevPage
		let:showNextPage
		on:pageChange{onPageChange}
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
	</Carousel>
</section>

<style>
	section {
		background: var(--color-gray-100);
		padding: 16px 8px 0 8px;
	}

	.info {
		display: flex;
		justify-content: space-between;
	}

	.info p {
		margin: 0;
		margin-bottom: 4px;
		line-height: 1;
		text-align: center;
		font-size: var(--12px);
		text-transform: uppercase;
		font-weight: 800;
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
</style>
