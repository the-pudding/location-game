<!-- LeafletMap.svelte -->
<script>
	import { onMount } from "svelte";
	import "leaflet/dist/leaflet.css";

	export let latitude;
	export let longitude;
	export let placed;

	const MILES_IN_A_METER = 0.000621371;
	const maxZoom = 14;

	let mapEl;
	let L;
	let map;
	let group;
	let iconGuess;
	let iconAnswer;
	let distance;

	$: gameOver = false;

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
		// const guessLocation = e.latlng;
		// L.marker(guessLocation, { icon: iconGuess }).addTo(group);

		L.marker(answerLocation, { icon: iconAnswer }).addTo(group);
		const answerLocation = L.latLng(latitude, longitude);

		L.polyline([answerLocation, guessLocation], {
			color: "black",
			dashArray: "5, 10"
		}).addTo(group);

		distance = Math.round(
			answerLocation.distanceTo(guessLocation) * MILES_IN_A_METER
		);
	}

	function handleMapClick(e) {
		placed = true;
		group.clearLayers();

		const guessLocation = e.latlng;
		L.marker(guessLocation, { icon: iconGuess }).addTo(group);
	}

	onMount(async () => {
		L = await import("leaflet");

		// Create custom marker icons
		// iconGuess = L.icon({
		// 	iconUrl: "assets/icons/user.svg",
		// 	iconSize: [24, 24],
		// 	iconAnchor: [-12, 24]
		// });

		iconGuess = L.divIcon({
			className: "icon-guess",
			html: "<span>1</span>",
			iconSize: [20, 20]
		});

		iconAnswer = L.divIcon({
			className: "icon-answer"
		});

		map = L.map(mapEl).setView([37.8, -96], 3);

		setTileLayer(0);

		group = L.layerGroup().addTo(map);

		map.on("click", handleMapClick);
	});
</script>

<div bind:this={mapEl} />

<style>
	div {
		width: 100%;
		aspect-ratio: 2;
	}

	:global(.icon-guess span) {
		background: red;
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		font-weight: 800;
		text-align: center;
		border: 1px solid var(--color-fg);
	}

	:global(.icon-answer) {
		width: 32px;
		height: 32px;
		background: green;
	}
</style>
