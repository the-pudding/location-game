<script>
	import { onMount, getContext } from "svelte";
	import { firstTime, overlay } from "$stores/misc.js";
	import Overlay from "$components/Overlay.svelte";
	const copy = getContext("copy");
	let hideThings;
	let second;

	$: if (hideThings && $overlay === undefined) hideThings = false;
	$: closeText = hideThings ? "Start" : "Close";

	onMount(() => {
		if ($firstTime) {
			hideThings = $firstTime;
			$overlay = "about";
		}
		$firstTime = false;
	});
</script>

<Overlay section="about" {closeText}>
	<h3>How to Play</h3>
	<p>{@html copy.about}</p>

	<ul>
		{#each copy.score as value, i}
			<li class="threshold-{i}">{value}<br />miles</li>
		{/each}
	</ul>

	{#if !hideThings}
		<h3>Data</h3>
		<p>{@html copy.data}</p>
	{/if}

	<p>
		{@html copy.credit}
		{#if !hideThings}{@html copy.support}{/if}
	</p>
</Overlay>

<style>
	h3 {
		margin-bottom: 0;
	}

	p {
		margin-top: 8px;
	}

	ul {
		margin-bottom: 16px;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
	}

	li {
		list-style-type: none;
		width: 25%;
		padding: 4px 12px;
		font-weight: 800;
		margin-bottom: 2px;
		text-align: center;
		line-height: 1.2;
	}
</style>
