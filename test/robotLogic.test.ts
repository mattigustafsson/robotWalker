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

describe("move robot", () => {});

describe("detect collition", () => {
	const room: Room = createRoom(3, 3);
	let robot: Robot;

	it("should throw an error if collition is detected at north wall", () => {
		robot = { x: -5, y: 0, direction: "N" };
		expect(detectCollition(robot, room)).toBe(true);
	});
	it("should throw an error if collition is detected at west wall", () => {
		robot = { x: 0, y: -2, direction: "W" };
		expect(detectCollition(robot, room)).toBe(true);
	});
	it("should throw an error if collition is detected at east wall", () => {
		robot = { x: 5, y: 0, direction: "E" };
		expect(detectCollition(robot, room)).toBe(true);
	});
	it("should throw an error if collition is detected at south wall", () => {
		robot = { x: 0, y: -5, direction: "S" };
		expect(detectCollition(robot, room)).toBe(true);
	});
	it("should return false if collition is not detected", () => {
		robot = { x: 0, y: 0, direction: "N" };
		expect(detectCollition(robot, room)).toBe(false);
	});
});
