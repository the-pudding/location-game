<script>
	import { getContext } from "svelte";
	import Slider from "$components/helpers/Slider.svelte";
	import Slide from "$components/helpers/Slider.Slide.svelte";
	import Tap from "$components/helpers/Tap.svelte";

	import Image from "$components/Clues.Image.svelte";
	import mq from "$stores/mq.js";
	import { clueIndex } from "$stores/misc.js";

	export let images;

	const copy = getContext("copy");

	let sliderEl;
	let slideIndex = 0;

	const onTap = ({ detail }) => {
		detail === "right" ? sliderEl.next() : sliderEl.prev();
	};

	$: left = slideIndex === 0 ? "left" : null;
	$: right = slideIndex >= $clueIndex ? "right" : null;
	// $: disable = [left, right].filter((d) => d);
	$: disable = [];
</script>

<div class="wrapper">
	<div class="info">
		<p class="tagline">{copy.tagline}</p>
		<p class="counter">Photo {slideIndex + 1} of 5</p>
	</div>

	<div class="images">
		<Slider bind:this={sliderEl}>
			{#each images as image, index}
				<Slide {index}>
					<Image {image} {index} />
				</Slide>
			{/each}
		</Slider>
	</div>

	<Tap
		on:tap={onTap}
		full={true}
		showArrows={true}
		size={"96px"}
		{disable}
		arrowStroke={"#262626"}
	/>
</div>

<style>
	.wrapper {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.info p {
		margin: 0;
		padding-top: 4px;
		line-height: 1;
		text-align: center;
		font-size: var(--12px);
		text-transform: uppercase;
		font-weight: 800;
	}

	p.tagline {
		color: var(--color-gray-600);
	}

	p.counter {
		padding-bottom: 4px;
	}

	.images {
		flex: 1;
	}
</style>
