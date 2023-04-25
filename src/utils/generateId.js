import { range } from "d3";

export default function generateId(l = 4) {
	const vals = "0123456789abcdefghijklmnopqrstuvwxyz".split("");
	const id = range(l)
		.map(() => {
			const a = Math.floor(Math.random() * vals.length);
			return vals[a];
		})
		.join("");

	return id;
}
