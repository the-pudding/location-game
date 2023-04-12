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
						<div class="figure-img">
							<img {src} alt={title} bind:naturalHeight={heights[i]} />
						</div>
						<figcaption>
							<button on:click={() => (reveal = !reveal)}
								>{prefix} attribution{suffix}</button
							>
							<span class:reveal>
								{@html credit}
							</span>
						</figcaption>
					</figure>
				</div>
			{/each}
		{/key}
		<div class="dots" slot="dots">
			{#each images as image, i}
				<button
					data-index={i + 1}
					class:active={i === currentPageIndex}
					on:click={() => carousel.goTo(i)}>?</button
				>
			{/each}
		</div>
	</Carousel>
</section>

<style>
	.slide {
		aspect-ratio: 1;
	}

	figure {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
	}

	.figure-img {
		/* flex-grow: 1; */
		overflow: hidden;
	}

	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}

	figcaption {
		width: 100%;
		text-align: center;
		font-size: var(--12px);
		padding: 8px;
	}

	figcaption button {
		width: 200px;
		margin: 0 auto 4px auto;
		display: block;
	}

	span {
		visibility: hidden;
	}

	span.reveal {
		visibility: visible;
	}

	.dots button.active {
		background: gray;
	}

	.dots {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 0 24px;
	}

	.dots button {
		flex: 1;
		margin: 0 8px;
		font-size: var(--12px);
		position: relative;
	}

	.dots button:after {
		content: attr(data-index);
		display: block;
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 100%;
		text-align: center;
		transform: translate(0, 100%);
		line-height: 1;
	}
</style>
