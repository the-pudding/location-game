<script>
	import Leaflet from "./Leaflet.svelte";
	export let latitude;
	export let longitude;
</script>

<section id="guess">
	{#if latitude}
		<Leaflet {latitude} {longitude} />
	{/if}
</section>

<style>
	section {
		margin-top: 32px;
	}
</style>
