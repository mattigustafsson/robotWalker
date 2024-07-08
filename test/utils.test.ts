import { integerCheck, moveCheck, dirrectionCheck } from "../src/utils";
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

	describe("dirrectionCheck", () => {
		it("should return a valid direction", () => {
			expect(dirrectionCheck("N")).toBe("N");
		});
		it("should throw an error if input is not a valid direction", () => {
			expect(() => dirrectionCheck("test")).toThrow();
		});
	});
});
