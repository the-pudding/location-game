<script>
	import { onMount, getContext } from "svelte";
	import { base } from "$app/paths";
	import { shuffle } from "d3";

	let data = [];
	let index;
	let visible;

	onMount(async () => {
		// load games.json from assets folder

		const response = await fetch(`${base}/assets/games.json`);
		data = await response.json();
	});

	function onNewGame() {
		index = Math.floor(Math.random() * data.length);
		visible = false;
	}

	function onReveal() {
		visible = true;
	}

	$: game = data[index];
	$: images = shuffle(game?.images || []).slice(0, 5);
	$: name = `${game?.name}, ${game?.state_code}`;
	$: latitude = game?.latitude;
	$: longitude = game?.longitude;
</script>

{#if data}
	<button on:click={onNewGame}>new game</button>
	<button on:click={onReveal}>reveal answer</button>
{/if}

{#if game}
	<div>
		<p class="answer" class:visible>
			{name} ({latitude}, {longitude})
		</p>

		<ul>
			{#each images as href, i}
				<li>
					<img src={href} alt="random photo {i + 1} of mystery place" />
				</li>{/each}
		</ul>
	</div>
{/if}

<style>
	.answer {
		visibility: hidden;
	}

	.visible {
		visibility: visible;
	}

	li {
		list-style-type: none;
		margin: 8px;
	}
</style>
