const alphabet = "abcdefghij".split("");
const others = "klmnopqrstuvwxyz".split("");

export function encode(number) {
	const a = `${number}`
		.split("")
		.map((d) => alphabet[+d])
		.join("");

	const before = others[Math.floor(Math.random() * others.length)];
	const after = others[Math.floor(Math.random() * others.length)];
	return `${before}0${a}${after}`;
}

export function decode(str) {
	const a = str
		.slice(2, -1)
		.split("")
		.map((d) => alphabet.indexOf(d))
		.join("");

	return +a;
}
