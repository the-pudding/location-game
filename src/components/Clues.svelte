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
	let current = 0;
	let count;

	const onTap = ({ detail }) => {
		detail === "right" ? sliderEl.next() : sliderEl.prev();
	};

	$: sliderEl?.jump($clueIndex);
	$: left = current === 0 ? "left" : null;
	$: right = current >= $clueIndex ? "right" : null;
	$: disable = [left, right].filter((d) => d);
</script>

<div class="wrapper">
	<div class="info">
		<p class="tagline">{copy.tagline}</p>
		<p class="counter">{current + 1} of {count}</p>
	</div>

	<div class="images">
		<Slider bind:this={sliderEl} bind:current bind:count>
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
		flex-direction: row;
		justify-content: space-between;
		padding: 8px 0;
	}

	.info p {
		margin: 0;
		line-height: 1;
		text-align: center;
		font-size: var(--14px);
	}

	.images {
		flex: 1;
	}
</style>
