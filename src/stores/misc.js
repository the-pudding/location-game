import { ascending } from "d3";
import { writable, derived } from "svelte/store";
import { persisted } from "svelte-local-storage-store";

const NUM_GUESSES = 5;

export const overlay = writable(undefined);
export let clueIndex = writable(0);
export let guesses = writable([]);
export let gameOver = derived(
	clueIndex,
	($clueIndex) => $clueIndex === NUM_GUESSES
);
export let best = derived(guesses, ($guesses) => {
	if (!$guesses.length) return;
	const copy = $guesses.map((d) => ({ ...d }));
	copy.sort((a, b) => ascending(a.distance, b.distance));
	return copy[0];
});

export const stats = persisted("pudding_location_game_stats", []);
