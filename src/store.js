// hier speicherst du globale variablen wie den punktestand usw rein
import { writable } from "svelte/store";
export const score = writable(0);

export const activeQuestion = writable(0);

export const currentFeedback = writable("");
