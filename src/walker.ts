export function startWalk() {
	console.log("startWalk");
}

/**
 * Creates a 2D array of zeros with dimensions x and y.
 * @param x - The number of columns in the array.
 * @param y - The number of rows in the array.
 * @returns A 2D array with dimensions x and y, filled with zeros.
 * @throws {Error} If x or y is less than or equal to zero.
 */
export function createArea(x: number, y: number): number[][] {
	if (x <= 0 || y <= 0) {
		throw new Error("Both x and y must be greater than zero");
	}

	return Array(y).fill(Array(x).fill(0));
}

export function placeRobot(x: number, y: number) {
	console.log("placeRobot", x, y);
}

export function moveRobot() {
	console.log("moveRobot");
}
