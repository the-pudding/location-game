<script>
	import { overlay } from "$stores/misc.js";
	import copy from "$data/copy.json";
	import wordmark from "$svg/wordmark.svg";
	import { HelpCircle, BarChart2 } from "lucide-svelte";
</script>

<header>
	<div class="wrapper">
		<div class="title">
			<h1>Where in the USA is this?</h1>
			<p class="brand">
				A daily game from&nbsp;<a href="https://pudding.cool">The Pudding</a>
			</p>
		</div>

		<div class="about">
			<button
				aria-label="about"
				on:click={() => {
					$overlay = "about";
				}}><HelpCircle /></button
			>

			<button
				aria-label="stats"
				on:click={() => {
					$overlay = "stats";
				}}><BarChart2 /></button
			>
		</div>
	</div>
</header>

<style>
	header {
		position: relative;
		max-width: 600px;
		margin: 0 auto;
		font-size: var(--16px);
		height: var(--header-height);
		padding: 0 8px;
	}
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px 0;
		border-bottom: 2px solid var(--color-fg);
		width: 100%;
	}

	h1,
	p {
		font-size: inherit;
		font-weight: 400;
		line-height: 1;
		margin: 0;
	}

	h1 {
		font-weight: 800;
		text-transform: uppercase;
		margin-bottom: 4px;
	}

	button {
		padding: 0;
		line-height: 1;
		border: none;
		width: 36px;
		height: 36px;
	}

	:global(.about svg) {
		vertical-align: bottom;
	}
</style>
