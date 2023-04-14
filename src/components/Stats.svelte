<script>
	import { onMount, getContext } from "svelte";
	import Overlay from "$components/Overlay.svelte";
	import { stats, gameOver, best } from "$stores/misc.js";
	const copy = getContext("copy");

	export let game;

	$: if ($gameOver) {
		const newStat = {
			game,
			...$best
		};

		$stats = [...$stats, newStat];
	}

	onMount(() => {
		// TODO remove
		if (window.location.href.includes("localhost"))
			localStorage.removeItem("pudding_location_game_stats");
	});
</script>

<Overlay section="stats">
	<h3>Your Stats</h3>
</Overlay>
