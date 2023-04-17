<script>
	import { overlay } from "$stores/misc.js";

	export let section;
	$: visible = $overlay === section;
</script>

<section id={section} class:visible>
	<slot />
	<button on:click={() => ($overlay = undefined)}>Close</button>
</section>

<style>
	section {
		display: none;
		position: absolute;
		top: 3px;
		left: 0;
		background: var(--color-bg);
		z-index: var(--z-overlay);
		width: 100%;
		height: calc(100vh - var(--header-height));
		padding: 0 8px;
	}

	.visible {
		display: block;
	}
</style>
