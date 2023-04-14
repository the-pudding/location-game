<script>
	import { ChevronLeft, ChevronRight } from "lucide-svelte";
	import { createEventDispatcher } from "svelte";

	export let debug = false;
	export let enableKeyboard = false;
	export let full = false;
	export let showArrows = false; // boolean or array of directions
	export let disable = [];
	export let directions = ["left", "right"];
	export let size = "64px";
	export let arrowSize = "48px";
	export let arrowStroke = "#000";
	export let arrowStrokeOutline = "#fff";
	export let arrowStrokeWidth = "2";
	export let arrowPosition = "center"; // start, center, end

	const dispatch = createEventDispatcher();
	let innerHeight;

	$: getW = (dir) =>
		["left", "right"].includes(dir) ? size : full ? "100%" : size;
	$: getH = (dir) =>
		["up", "down"].includes(dir) ? size : full ? "100%" : size;

	$: onKeyDown = (e) => {
		const dir = e.key.replace("Arrow", "").toLowerCase();
		const hasDir = directions.includes(dir);
		if (enableKeyboard && hasDir) {
			e.preventDefault();
			dispatch("tap", dir);
		}
	};

	$: visibleArrows = directions.filter((d) =>
		typeof showArrows === "boolean" ? showArrows : showArrows.includes(d)
	);
</script>

<section class:debug class="tap">
	{#each directions as dir}
		<button
			on:click={dispatch("tap", dir)}
			style="width: {getW(dir)}; height: {getH(dir)};"
			aria-label={dir}
			class="{dir} {arrowPosition}"
			class:full
			disabled={disable.includes(dir)}
		>
			{#if visibleArrows.includes(dir)}
				<span style="--arrow-size:{arrowSize};">
					{#if dir === "left"}
						<ChevronLeft
							color={arrowStrokeOutline}
							strokeWidth={arrowStrokeWidth * 2}
						/>
						<ChevronLeft color={arrowStroke} strokeWidth={arrowStrokeWidth} />
					{:else if dir === "right"}
						<ChevronRight
							color={arrowStrokeOutline}
							strokeWidth={arrowStrokeWidth * 2}
						/>
						<ChevronRight color={arrowStroke} strokeWidth={arrowStrokeWidth} />
					{/if}
				</span>
			{/if}
		</button>
	{/each}
</section>

<style>
	section {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: var(--z-overlay);
		pointer-events: none;
	}

	button {
		position: absolute;
		cursor: pointer;
		background: none;
		border-radius: 0;
		outline: none;
		border: none;
		box-shadow: none;
		pointer-events: auto;
		display: flex;
		padding: 0;
	}

	button:disabled {
		opacity: 0;
		cursor: not-allowed;
	}

	button:hover {
		/* background-color: rgba(255, 255, 255, 0.2); */
	}

	.left {
		left: 0;
		top: 0;
		/* text-align: left; */
	}

	.right {
		right: 0;
		top: 0;
		/* text-align: right; */
	}

	.left.start,
	.right.start {
		align-items: flex-start;
	}

	.left.center,
	.right.center {
		top: 50%;
		transform: translateY(-50%);
	}

	.left.end,
	.right.end {
		bottom: 0;
		top: auto;
	}

	.up {
		top: 0;
		left: 0;
		/* text-align: center; */
	}

	.down {
		bottom: 0;
		left: 0;
		/* text-align: center; */
	}

	.up.center,
	.down.center {
		left: 50%;
		transform: translateX(-50%);
	}

	.up.end,
	.down.end {
		right: 0;
		left: auto;
	}

	/* full positions */
	.full.left.start,
	.full.right.start {
		align-items: flex-start;
	}

	.full.left.center,
	.full.right.center {
		align-items: center;
	}

	.full.left.end,
	.full.right.end {
		align-items: flex-end;
	}

	.full.up.start,
	.full.down.start {
		justify-content: flex-start;
	}

	.full.up.center,
	.full.down.center {
		justify-content: center;
	}

	.full.up.end,
	.full.down-end {
		justify-content: flex-end;
	}

	span {
		display: inline-block;
		width: 100%;
		line-height: 1;
		opacity: 1;
		position: relative;
		transform: translate(0, -32px);
	}

	.debug .left {
		background: red;
		opacity: 0.5;
	}

	.debug .right {
		background: red;
		opacity: 0.5;
	}

	.debug .up {
		background: orange;
		opacity: 0.5;
	}

	.debug .down {
		background: orange;
		opacity: 0.5;
	}

	:global(.tap span svg) {
		display: block;
		position: absolute;
		top: 0;
		width: var(--arrow-size);
		height: var(--arrow-size);
	}

	:global(.tap .left span svg) {
		left: 0;
	}

	:global(.tap .right span svg) {
		right: 0;
	}
</style>
