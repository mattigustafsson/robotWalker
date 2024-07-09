import { describe, expect, it, beforeEach } from "bun:test";
import { createRoom, placeRobot, moveRobot } from "../src/walker";
import type { Robot, Room } from "../src/walker";
import { detectCollition } from "../src/utils";

describe("create area", () => {
	it("should create an empty 2D array with dimensions x and y", () => {
		const x = 3;
		const y = 5;
		const area = createRoom(x, y);

		expect(area).toEqual([
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		]);
	});

	it("should throw an error if x or y is less than or equal to zero", () => {
		expect(() => createRoom(0, 1)).toThrow();
		expect(() => createRoom(1, 0)).toThrow();
	});
});

describe("place robot", () => {
	let room: Room;
	let robot: Robot;

	beforeEach(() => {
		room = createRoom(3, 3);
	});

	it("should place the robot at (0,0) in the room", () => {
		robot = { x: 0, y: 0, direction: "N" };
		placeRobot(robot, room);

		expect(room).toEqual([
			[1, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		]);
	});
	it("should place the robot at (0,1) in the room", () => {
		robot = { x: 0, y: 1, direction: "N" };
		placeRobot(robot, room);

		expect(room).toEqual([
			[0, 0, 0],
			[1, 0, 0],
			[0, 0, 0],
		]);
	});
	it("should place the robot at (1,2) in the room", () => {
		robot = { x: 1, y: 2, direction: "N" };
		placeRobot(robot, room);

		expect(room).toEqual([
			[0, 0, 0],
			[0, 0, 0],
			[0, 1, 0],
		]);
	});
});

describe("detect collition", () => {
	const room: Room = createRoom(3, 3);
	let robot: Robot;

	it("should return true if collition is detected at north wall", () => {
		robot = { x: -5, y: 0, direction: "N" };
		expect(detectCollition(robot, room)).toBe(true);
	});
	it("should return true if collition is detected at west wall", () => {
		robot = { x: 0, y: -2, direction: "W" };
		expect(detectCollition(robot, room)).toBe(true);
	});
	it("should return true if collition is detected at east wall", () => {
		robot = { x: 5, y: 0, direction: "E" };
		expect(detectCollition(robot, room)).toBe(true);
	});
	it("should return true if collition is detected at south wall", () => {
		robot = { x: 0, y: -5, direction: "S" };
		expect(detectCollition(robot, room)).toBe(true);
	});
	it("should return false if collition is not detected", () => {
		robot = { x: 0, y: 0, direction: "N" };
		expect(detectCollition(robot, room)).toBe(false);
	});
});

describe("move robot", () => {
	let robot: Robot;
	let room: Room;

	beforeEach(() => {
		room = createRoom(3, 3);
		robot = { x: 0, y: 0, direction: "S" };
		placeRobot(robot, room);
	});

	it("should accept one or more movements input", () => {
		expect(() => moveRobot("f", robot, room)).not.toThrow();
		expect(() => moveRobot("rlf", robot, room)).not.toThrow();
		expect(() => moveRobot("lllrrff", robot, room)).not.toThrow();
	});

	it("should move the robot south one step", () => {
		moveRobot("f", robot, room);

		expect(robot).toEqual({ x: 0, y: 1, direction: "S" });
		expect(room).toEqual([
			[0, 0, 0],
			[1, 0, 0],
			[0, 0, 0],
		]);
	});

	it("should move the robot east one step", () => {
		moveRobot("lf", robot, room);
		expect(robot).toEqual({ x: 1, y: 0, direction: "E" });
		expect(room).toEqual([
			[0, 1, 0],
			[0, 0, 0],
			[0, 0, 0],
		]);
	});

	it("should move the robot west one step", () => {
		robot = { x: 1, y: 0, direction: "S" };
		moveRobot("rf", robot, room);
		expect(robot).toEqual({ x: 0, y: 0, direction: "W" });
		expect(room).toEqual([
			[1, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		]);
	});

	it("should move the robot north one step", () => {
		robot = { x: 0, y: 1, direction: "N" };
		moveRobot("f", robot, room);
		expect(robot).toEqual({ x: 0, y: 0, direction: "N" });
		expect(room).toEqual([
			[1, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		]);
	});
	describe("collitions", () => {
		it("should throw an error if collition is detected at north wall", () => {
			robot = { x: 0, y: 0, direction: "N" };
			expect(() => moveRobot("f", robot, room)).toThrow();
		});
		it("should throw an error if collition is detected at west wall", () => {
			robot = { x: 0, y: 0, direction: "W" };
			expect(() => moveRobot("f", robot, room)).toThrow();
		});
		it("should throw an error if collition is detected at east wall", () => {
			robot = { x: 2, y: 0, direction: "E" };
			expect(() => moveRobot("f", robot, room)).toThrow();
		});
		it("should throw an error if collition is detected at south wall", () => {
			robot = { x: 0, y: 2, direction: "S" };
			expect(() => moveRobot("f", robot, room)).toThrow();
		});
	});
});
