import { range, format } from "d3";

export default function formatGuessDistance(guess) {
	const dist = guess?.distance;
	if (dist !== undefined) {
		const d = dist < 0.1 ? 2 : dist < 10 ? 1 : 0;
		const digits = dist === 0 ? 0 : d;
		return `${format(`,.${digits}f`)(dist)} mi`;
	}
	return "";
}
