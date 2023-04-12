<!-- LeafletMap.svelte -->
<script>
	import { onMount } from "svelte";
	import { guesses, clueIndex, best, gameOver } from "$stores/misc.js";
	import "leaflet/dist/leaflet.css";

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

	function setTileLayer(i) {
		if (i === 0)
			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				maxZoom
			}).addTo(map);
		else if (i === 1)
			L.tileLayer(
				"https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}",
				{
					attribution:
						'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
					subdomains: "abcd",
					maxZoom,
					ext: "png"
				}
			).addTo(map);
		else if (i === 2)
			L.tileLayer(
				"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
				{
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
					subdomains: "abcd",
					maxZoom
				}
			).addTo(map);
	}

	function showAnswer() {
		group.clearLayers();

		const iconGuess = L.divIcon({
			className: "icon-guess",
			html: `<span></span>`,
			iconSize
		});

		L.marker($best.location, { icon: iconGuess }).addTo(group);

		L.marker(answerLocation, { icon: iconAnswer }).addTo(group);

		L.polyline([answerLocation, $best.location], {
			color: "black",
			dashArray: "5, 10"
		}).addTo(group);

		console.log(group);
		map.fitBounds(group.getBounds(), { padding: [50, 50] });
	}

	function handleMapClick(e) {
		group.clearLayers();
		placed = true;
		const location = e.latlng;

		// previous guesses
		$guesses.forEach((guess) => {
			const iconGuess = L.divIcon({
				className: "icon-guess",
				html: `<span>${guess.i + 1}</span>`,
				iconSize
			});

			L.marker(guess.location, { icon: iconGuess }).addTo(group);
		});

		// current guess
		const iconGuess = L.divIcon({
			className: "icon-guess",
			html: `<span>${$clueIndex + 1}</span>`,
			iconSize
		});

		L.marker(location, { icon: iconGuess }).addTo(group);

		const distance = Math.round(
			answerLocation.distanceTo(location) * MILES_IN_A_METER
		);

		guess = {
			distance,
			location
		};
	}

	onMount(async () => {
		L = await import("leaflet");

		// Create custom marker icons
		// iconGuess = L.icon({
		// 	iconUrl: "assets/icons/user.svg",
		// 	iconSize
		// 	iconAnchor: [-12, 24]
		// });
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
		aspect-ratio: 1.5;
	}

	:global(.icon-guess) {
		pointer-events: none;
	}

	:global(.icon-guess span) {
		background: var(--color-bg);
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

	@media only screen and (min-width: 600px) {
		div {
			aspect-ratio: 2;
		}
	}
</style>
