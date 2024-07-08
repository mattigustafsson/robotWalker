export function integerCheck(answer: string): number {
	const integer = Number(answer);

	if (!Number.isInteger(integer) || Number.isNaN(integer) || integer < 1) {
		throw new Error("Input must be a positive integer");
	}
	return integer;
}

export function directionCheck(answer: string) {
	if (!["N", "E", "S", "W", "n", "e", "s", "w"].includes(answer)) {
		throw new Error("Input must be one of the following: N, E, S, W");
	}

	return answer;
}

export function moveCheck(answer: string) {
	return /^[flrFLR]+$/gm.test(answer);
}

export function promptWithNullCheck(message: string): string {
	const input = prompt(message);
	if (input === null) {
		throw new Error("Input cannot be null");
	}
	return input;
}
