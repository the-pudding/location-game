<script>
	import { overlay } from "$stores/misc.js";
	import copy from "$data/copy.json";
	import wordmark from "$svg/wordmark.svg";
	import { HelpCircle, BarChart2 } from "lucide-svelte";
</script>

<header>
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

	<h1>{copy.title}</h1>

	<p class="brand">
		a game from <a
			class="wordmark"
			href="https://pudding.cool"
			aria-label="The Pudding">{@html wordmark}</a
		>
	</p>
</header>

<style>
	header {
		position: relative;
		padding: 16px;
	}

	h1 {
		font-size: var(--20px);
		font-weight: 400;
		text-align: center;
		line-height: 1;
		margin: 0;
	}

	p {
		margin: 0;
	}

	.about {
		position: absolute;
		top: 50%;
		left: 16px;
		transform: translate(0, -50%);
	}

	.about button {
		padding: 0;
		line-height: 1;
		border: none;
		font-size: 24px;
		color: var(--color-bg-2);
	}

	.about button:hover {
		background: transparent;
		color: var(--color-bg);
	}

	:global(.about svg) {
		vertical-align: bottom;
	}

	.brand {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: absolute;
		top: 50%;
		right: 24px;
		display: none;
		transform: translate(0, -50%);
	}

	a.wordmark {
		border: none;
		display: inline-block;
		color: currentColor;
		width: 6em;
		transform: translate(6px, 3px);
	}

	a.wordmark:hover {
		background-color: transparent;
	}

	:global(.wordmark svg path) {
		fill: currentColor;
	}

	@media (min-width: 720px) {
		.brand {
			display: flex;
		}
	}
</style>
