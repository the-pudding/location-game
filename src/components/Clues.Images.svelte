<script>
	import viewport from "$stores/viewport.js";

	export let images;

	const baseUrl =
		"https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file";

	let reveal;

	$: width = $viewport.width < 400 ? 512 : 1024;
	$: prefix = reveal ? "hide" : "show";
	$: suffix = reveal ? "" : " (spoilers!)";
</script>

{#each images as { title, credit }, i}
	{@const src = `${baseUrl}/${title}&width=${width}`}
	<div class="slide">
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
{/each}

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

	@media only screen and (min-width: 600px) {
		.slide {
			aspect-ratio: 1.5;
		}
	}
</style>
