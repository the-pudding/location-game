<script>
	import { getContext } from "svelte";
	import Overlay from "$components/Overlay.svelte";
	const copy = getContext("copy");
</script>

<Overlay section="about">
	<h3>About</h3>
	<p>{@html copy.about}</p>

	<ul>
		{#each copy.score as value, i}
			<li class="threshold-{i}">{@html value}</li>
		{/each}
	</ul>

	<h3>Data</h3>
	<p>{@html copy.data}</p>

	<p>{@html copy.outro}</p>
</Overlay>

<style>
	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}
	li {
		list-style-type: none;
		width: 10rem;
		padding: 4px 8px;
		font-weight: 800;
		margin-bottom: 2px;
	}
</style>
