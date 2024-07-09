import {
	integerCheck,
	moveCheck,
	directionCheck,
	turnLeft,
	turnRight,
	moveForward,
} from "../src/utils";
import { describe, expect, it } from "bun:test";

describe("utils", () => {
	describe("integerCheck", () => {
		it("should return an integer", () => {
			const integer = integerCheck("5");
			expect(integer).toBe(5);
		});
		it("should throw an error if input is not an integer", () => {
			expect(() => integerCheck("test")).toThrow();
		});
		it("should throw an error if input is not a positive integer", () => {
			expect(() => integerCheck("-5")).toThrow();
		});
	});

	describe("moveCheck", () => {
		it("should return true if input is valid", () => {
			expect(moveCheck("fllr")).toBe(true);
		});
		it("should return false if input is not valid", () => {
			expect(moveCheck("test")).toBe(false);
		});
	});

	describe("directionCheck", () => {
		it("should return a valid direction", () => {
			expect(directionCheck("N")).toBe("N");
		});
		it("should throw an error if input is not a valid direction", () => {
			expect(() => directionCheck("test")).toThrow();
		});
	});

	describe("movementCheck", () => {
		it("should return correct direction when turning left", () => {
			expect(turnLeft("N")).toBe("W");
			expect(turnLeft("n")).toBe("W");
			expect(turnLeft("W")).toBe("S");
			expect(turnLeft("w")).toBe("S");
			expect(turnLeft("S")).toBe("E");
			expect(turnLeft("s")).toBe("E");
			expect(turnLeft("E")).toBe("N");
			expect(turnLeft("e")).toBe("N");
		});
		it("should return correct direction when turning right", () => {
			expect(turnRight("N")).toBe("E");
			expect(turnRight("n")).toBe("E");
			expect(turnRight("E")).toBe("S");
			expect(turnRight("e")).toBe("S");
			expect(turnRight("S")).toBe("W");
			expect(turnRight("s")).toBe("W");
			expect(turnRight("W")).toBe("N");
			expect(turnRight("w")).toBe("N");
		});
		it("should return correct direction when moving forward", () => {
			expect(moveForward({ x: 1, y: 1, direction: "n" })).toEqual({
				x: 1,
				y: 0,
				direction: "n",
			});
			expect(moveForward({ x: 0, y: 0, direction: "E" })).toEqual({
				x: 1,
				y: 0,
				direction: "E",
			});
			expect(moveForward({ x: 0, y: 0, direction: "S" })).toEqual({
				x: 0,
				y: 1,
				direction: "S",
			});
			expect(moveForward({ x: 1, y: 0, direction: "W" })).toEqual({
				x: 0,
				y: 0,
				direction: "W",
			});
		});
	});
});
