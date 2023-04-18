<script>
	import viewport from "$stores/viewport.js";
	import getWikimediaSource from "$utils/getWikimediaSource.js";

	export let index;
	export let image;

	let reveal;

	$: title = image.title;
	$: credit = image.credit;
	$: url = image.url;
	$: width = $viewport.width < 400 ? 600 : 1200;
	$: prefix = reveal ? "hide" : "show";
	$: suffix = reveal ? "" : " (spoilers!)";
	$: src = getWikimediaSource({ url, width });
</script>

<figure>
	<div
		role="img"
		style="background-image: url('{src}');"
		aria-label="mystery photo {index} of 5"
	/>
	<figcaption>
		<button on:click={() => (reveal = !reveal)}
			>{prefix} attribution{suffix}</button
		>
		<span class:reveal>
			{@html credit}
		</span>
	</figcaption>
</figure>

<style>
	figure {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
	}

	[role="img"] {
		width: 100%;
		height: 100%;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}

	figcaption {
		width: 100%;
		text-align: center;
		font-size: var(--12px);
		padding: 8px;
	}

	figcaption button {
		width: 15rem;
		margin: 0 auto 4px auto;
		display: block;
	}

	span {
		visibility: hidden;
	}

	span.reveal {
		visibility: visible;
	}

	/* @media only screen and (min-width: 600px) {
		.slide {
			aspect-ratio: 1.5;
		}
	} */
</style>
