<script>
	import { range } from "d3";
	import loadJson from "$utils/loadJson.js";
	import getWikimediaSource from "$utils/getWikimediaSource.js";
	const timestamp = Date.now();
	const baseData = "https://pudding.cool/games/where-data/games/";

	let reveal;
	$: start = 290;
	$: end = start + 10;
</script>

{#each range(start, end) as i}
	{@const url = `${baseData}${i}.json?version=${timestamp}`}
	{#await loadJson(url)}
		<h2>loading {i}...</h2>
	{:then { game, images }}
		<h2>{game}</h2>
		<ul>
			{#each images as { title, url, credit }}
				{@const src = getWikimediaSource({ url })}
				<li>
					<figure>
						<img {src} alt={title} />
						<figcaption>{@html credit}</figcaption>
					</figure>
				</li>
			{/each}
		</ul>
	{/await}
{/each}

<style>
	:global(header) {
		display: none;
	}

	h2 {
		font-size: 36px;
		font-weight: 800;
		text-align: center;
	}

	ul {
		list-style-type: none;
		display: flex;
		margin: 0 auto;
		margin-bottom: 64px;
		width: 100%;
		padding: 16px;
		max-width: 1920px;
		align-items: center;
	}

	li {
		width: 20%;
	}

	:global(html, body, body > div) {
		height: auto !important;
		overflow: visible !important;
	}
</style>
