<script>
	import { range } from "d3";
	import loadJson from "$utils/loadJson.js";
	const timestamp = Date.now();
	const baseData = "https://pudding.cool/games/location-data/games/";
	const baseImage =
		"https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file";

	let reveal;
</script>

{#each range(100) as i}
	{@const url = `${baseData}${i}.json?version=${timestamp}`}
	{#await loadJson(url)}
		<h2>loading {i}...</h2>
	{:then { game, images }}
		<h2>{game}</h2>
		<ul>
			{#each images as { pageid, title }}
				{@const src = `${baseImage}/${title}&width=512`}
				<li>
					<p>{pageid}</p>
					<p>{src}</p>
					<img {src} alt="img" />
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

	img {
		width: 20%;
	}

	:global(html, body, body > div) {
		height: auto !important;
		overflow: visible !important;
	}
</style>
