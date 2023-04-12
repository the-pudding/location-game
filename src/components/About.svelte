<script>
	import { getContext } from "svelte";
	import Overlay from "$components/Overlay.svelte";
	const copy = getContext("copy");
</script>

<Overlay section="about">
	<h3>About</h3>
	<p>{@html copy.about}</p>

	<ul>
		{#each copy.score as value}
			<li>{@html value}</li>
		{/each}
	</ul>

	<h3>Data</h3>
	<p>{@html copy.data}</p>

	<p>{@html copy.outro}</p>
</Overlay>
