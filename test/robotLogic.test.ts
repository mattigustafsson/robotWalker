import { describe, expect, it } from "bun:test";
import { createArea } from "../src/walker";

describe("create area", () => {
	it("should create an empty 2D array with dimensions x and y", () => {
		const x = 3;
		const y = 5;
		const area = createArea(x, y);

		expect(area).toEqual([
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		]);
	});

	it("should throw an error if x or y is less than or equal to zero", () => {
		expect(() => createArea(0, 1)).toThrow();
		expect(() => createArea(1, 0)).toThrow();
	});
});

describe("place robot", () => {});

describe("move robot", () => {});
