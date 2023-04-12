import { writable } from "svelte/store";
import { persisted } from "svelte-local-storage-store";

export const overlay = writable(undefined);
export let clueIndex = writable(0);
export let guesses = writable([]);

export const stats = persisted("pudding_location_game_stats", []);
