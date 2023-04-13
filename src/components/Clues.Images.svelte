<script>
	import viewport from "$stores/viewport.js";

	export let image;

	const baseUrl =
		"https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file";

	let reveal;

	$: width = $viewport.width < 400 ? 512 : 1024;
	$: prefix = reveal ? "hide" : "show";
	$: suffix = reveal ? "" : " (spoilers!)";
	$: src = `${baseUrl}/${title}&width=${width}`;
	$: title = image.title;
	$: credit = image.credit;
</script>

<div class="image">
	<figure>
		<div class="figure-img">
			<img {src} alt={title} />
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

<style>
	/* .slide {
		aspect-ratio: 1;
	} */

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
		/* border: 1px solid black; */
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
