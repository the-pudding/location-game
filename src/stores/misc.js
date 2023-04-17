import { ascending } from "d3";
import { writable, derived } from "svelte/store";
import { persisted } from "svelte-local-storage-store";

export const RADIUS = 5;
export const NUM_GUESSES = 5;
export const THRESHOLDS = [0, 100, 200];

export const overlay = writable(undefined);
export const clueIndex = writable(0);
export const guesses = writable([]);

export const best = derived(guesses, ($guesses) => {
	if (!$guesses.length) return;
	const copy = $guesses.map((d) => ({ ...d }));
	copy.sort((a, b) => ascending(a.distance, b.distance));
	return copy[0];
});

export const gameOver = derived(
	clueIndex,
	($clueIndex) => $clueIndex === NUM_GUESSES
);

export const stats = persisted("pudding_location_game_stats", []);
export const firstTime = persisted("pudding_location_game_first", true);
