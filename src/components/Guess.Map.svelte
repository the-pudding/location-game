<!-- LeafletMap.svelte -->
<script>
	import { onMount } from "svelte";
	import { guesses, clueIndex, best, gameOver } from "$stores/misc.js";
	import "leaflet/dist/leaflet.css";
	import destinationPoint from "$utils/destinationPoint.js";

	export let latitude;
	export let longitude;
	export let placed;
	export let guess;

	const MILES_IN_A_METER = 0.000621371;
	const maxZoom = 14;
	const iconSize = [20, 20];

	let mapEl;
	let L;
	let map;
	let group;
	let iconGuess;
	let iconAnswer;
	let answerLocation;

	$: if (L && latitude) answerLocation = L.latLng(latitude, longitude);
	$: if ($gameOver) showAnswer();
	$: renderGuesses($guesses.length);

	function renderRing() {
		if (!$guesses.length) return;
		// latest guess
		const { location, distance } = guess;
		const inc = distance > 100 ? 100 : 20;
		const radiusInner = Math.floor(distance / inc) * inc;
		const radiusOuter = radiusInner + inc;
		const radiusStroke = radiusInner + inc / 2;
		const size = radiusOuter * 2;

		// const html = `
		// 	<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
		// 		<circle cx="${radiusOuter}" cy="${radiusOuter}" r="${radiusInner}" fill="none" stroke="pink" stroke-width="${inc}" />
		// 	</svg>
		// `;

		// const ringMarker = L.marker(location, {
		// 	interactive: false,
		// 	icon: L.divIcon({
		// 		className: "ring",
		// 		html,
		// 		iconSize: [size, size],
		// 		iconAnchor: [radiusOuter, radiusOuter]
		// 	})
		// }).addTo(group);

		// ringMarker.getElement().style.opacity = '0';

		// setTimeout(() => {
		// 	ringMarker.remove();
		// }, 10000);

		const radiusOuterMeters = radiusOuter * 1609.34;
		const northEast = destinationPoint(location, radiusOuterMeters, 45);
		const southWest = destinationPoint(location, radiusOuterMeters, 225);

		const bounds = L.latLngBounds(northEast, southWest);
		map.fitBounds(bounds, { padding: [50, 50] });
	}

	function renderGuesses(afterGuess) {
		if (!$gameOver && afterGuess) renderRing();

		// previous guesses
		$guesses.forEach((guess) => {
			const iconGuess = L.divIcon({
				className: "icon-guess",
				html: `<span class="threshold-${guess.threshold}">${
					guess.i + 1
				}</span>`,
				iconSize
			});

			L.marker(guess.location, { icon: iconGuess }).addTo(group);
		});
	}

	function setTileLayer(i) {
		if (i === 0)
			L.tileLayer(
				"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
				{
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
					subdomains: "abcd",
					maxZoom
				}
			).addTo(map);
		else
			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				maxZoom
			}).addTo(map);
	}

	function showAnswer() {
		group.clearLayers();

		const iconGuess = L.divIcon({
			className: "icon-guess",
			html: `<span class="threshold-${$best.seq}"></span>`,
			iconSize
		});

		L.marker($best.location, { icon: iconGuess }).addTo(group);

		L.marker(answerLocation, { icon: iconAnswer }).addTo(group);

		L.polyline([answerLocation, $best.location], {
			color: "black",
			dashArray: "5, 10"
		}).addTo(group);

		map.fitBounds(group.getBounds(), { padding: [50, 50] });
	}

	function handleMapClick(e) {
		group.clearLayers();
		placed = true;
		const location = e.latlng;

		const distance = Math.round(
			answerLocation.distanceTo(location) * MILES_IN_A_METER
		);

		renderGuesses();

		const iconGuess = L.divIcon({
			className: "icon-guess",
			html: `<span class="threshold-">${$clueIndex + 1}</span>`,
			iconSize
		});

		L.marker(location, { icon: iconGuess }).addTo(group);

		guess = {
			distance,
			location
		};
	}

	onMount(async () => {
		L = await import("leaflet");

		iconAnswer = L.divIcon({
			className: "icon-answer",
			iconSize: [32, 32],
			html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flag"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" x2="4" y1="22" y2="15"></line></svg>'
		});

		map = L.map(mapEl).setView([37.8, -96], 3);

		setTileLayer(0);

		group = L.featureGroup();
		group.addTo(map);

		map.on("click", handleMapClick);
	});
</script>

<div bind:this={mapEl} />

<style>
	div {
		width: 100%;
		height: var(--map-height);
	}

	:global(.icon-guess) {
		pointer-events: none;
	}

	:global(.icon-guess span) {
		background: var(--color-gray-300);
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		font-weight: 800;
		text-align: center;
		border: 1px solid var(--color-fg);
	}

	:global(.icon-answer) {
		background: var(--color-fg);
		border-radius: 50%;
		text-align: center;
	}

	:global(.icon-answer svg) {
		display: inline-block;
		vertical-align: middle;
		transform: translate(0, 4px);
		width: 50%;
	}

	:global(.icon-answer svg path, .icon-answer svg line) {
		stroke: var(--color-bg);
	}
	/* @media only screen and (min-width: 600px) {
		div {
			aspect-ratio: 2;
		}
	} */
</style>
