import {
	moveRobotQuestion,
	placeRobotQuestion,
	roomQuestions,
} from "./questions";
import { detectCollition, moveForward, turnLeft, turnRight } from "./utils";

export type Robot = {
	x: number;
	y: number;
	direction: string;
};

export type Room = (number | Robot)[][];

let room: Room;
let robot: Robot;

/**
 * Function to start the robot's walk journey.
 *
 */
export function startWalk() {
	try {
		const { x: roomX, y: roomY } = roomQuestions();
		room = createRoom(roomX, roomY);

		const { x: robotX, y: robotY, dir: robotDir } = placeRobotQuestion();
		robot = { x: robotX, y: robotY, direction: robotDir };
		placeRobot(robot, room);

		const moveInput = moveRobotQuestion();
		moveRobot(moveInput, robot, room);
		console.log(
			`Robot is at (${robot.x}, ${robot.y}) facing ${robot.direction}`,
		);
	} catch (error) {
		if (error instanceof Error && error.message === "Collition detected") {
			console.error(`Collition detected at (${robot.x}, ${robot.y})`);
		}
		throw error;
	}
}

/**
 * Creates a 2D array of zeros with dimensions x and y.
 * @param x - The number of columns in the array.
 * @param y - The number of rows in the array.
 * @returns A 2D array with dimensions x and y, filled with zeros.
 * @throws {Error} If x or y is less than or equal to zero.
 */
export function createRoom(x: number, y: number): Room {
	if (x <= 0 || y <= 0) {
		throw new Error("Both x and y must be greater than zero");
	}
	return Array.from({ length: y }, () => Array.from({ length: x }, () => 0));
}

/**
 * Places a robot in a room at the specified coordinates and direction.
 *
 * @param {Robot} robot - The robot to be placed in the room.
 * @param {Room} room - The room in which the robot is placed.
 * @throws {Error} If the robot or room is undefined.
 * @throws {Error} If the position of the robot is not a valid placing position.
 */
export function placeRobot(robot: Robot, room: Room): void {
	if (!robot || !room) {
		throw new Error("Robot or room is undefined");
	}

	if (detectCollition(robot, room)) {
		throw new Error("Not a valid position placing position");
	}

	room[robot.y][robot.x] = 1;
	console.log(
		`Placing Robot at coordinates x: ${robot.x}, y: ${robot.y} and direction: ${robot.direction}`,
	);
}

/**
 * Moves the robot based on the input string, updating its position and direction.
 *
 * @param {string} input - The string containing movements for the robot (l: left, r: right, f: forward).
 * @param {Robot} robot - The robot object with current position and direction.
 * @param {Room} room - The room in which the robot is moving.
 * @return {boolean} Returns true if the robot successfully moves without collision.
 */
export function moveRobot(input: string, robot: Robot, room: Room): boolean {
	if (!input) {
		throw new Error("Input is undefined");
	}

	for (const movement of input.toUpperCase()) {
		switch (movement) {
			case "L":
				robot.direction = turnLeft(robot.direction);
				break;
			case "R":
				robot.direction = turnRight(robot.direction);
				break;
			case "F": {
				// Remove robot from current position
				room[robot.y][robot.x] = 0;

				const { x, y } = moveForward(robot);
				robot.x = x;
				robot.y = y;

				if (detectCollition(robot, room)) {
					throw new Error("Collition detected");
				}

				// Place robot in new position
				placeRobot(robot, room);
				break;
			}
		}
	}
	return true;
}
