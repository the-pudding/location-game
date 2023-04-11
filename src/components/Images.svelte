<script>
	import Carousel from "svelte-carousel";
	export let images;

	const baseUrl =
		"https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file";

	let reveal;
	let carousel;

	const heights = [];

	$: prefix = reveal ? "hide" : "reveal";
	$: suffix = reveal ? "" : " (spoilers!)";
</script>

<section id="images">
	<Carousel bind:this={carousel} infinite={false} let:currentPageIndex>
		{#key images}
			{#each images as { title, credit }, i}
				{@const src = `${baseUrl}/${title}&width=1024`}
				<div class="slide">
					<figure>
						<img {src} alt={title} bind:naturalHeight={heights[i]} />
						<figcaption>
							<button on:click={() => (reveal = !reveal)}
								>{prefix} credits{suffix}</button
							>
							<span class:reveal>
								{@html credit}
							</span>
						</figcaption>
					</figure>
				</div>
			{/each}
		{/key}
		<div slot="dots">
			{#each images as image, i}
				<button
					class:active={i === currentPageIndex}
					on:click={() => carousel.goTo(i)}>{i + 1}</button
				>
			{/each}
		</div>
	</Carousel>
</section>

<style>
	section {
	}

	button.active {
		background: gray;
	}

	.slide {
		display: flex;
		align-items: center;
		justify-content: center;
		aspect-ratio: 1;
	}

	figure {
		height: 100%;
	}

	img {
		max-width: 100%;
		max-height: 100%;
	}

	figcaption {
		font-size: var(--12px);
	}

	span {
		visibility: hidden;
	}

	span.reveal {
		visibility: visible;
	}
</style>
