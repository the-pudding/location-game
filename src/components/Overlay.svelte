<script>
	import { overlay } from "$stores/misc.js";

	export let section;
	export let closeText = "Close";
	$: visible = $overlay === section;
</script>

<section id={section} class:visible>
	<div class="inner">
		<slot />
		<button on:click={() => ($overlay = undefined)}>{closeText}</button>
	</div>
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
	}

	.visible {
		display: block;
	}

	.inner {
		padding: 0px 16px 16px 16px;
		background: var(--color-gray-100);
		border: 2px solid var(--color-fg);
		border-radius: 12px;
		position: absolute;
		top: calc(50% - var(--header-height) / 2);
		left: 50%;
		width: 90%;
		max-width: 320px;
		transform: translate(-50%, -50%);
	}

	button {
		width: 100%;
	}
</style>
