import {
	roomQuestions,
	placeRobotQuestion,
	moveRobotQuestion,
} from "./questions";
import { detectCollition } from "./utils";

export type Robot = {
	x: number;
	y: number;
	direction: string;
};

export type Room = (number | Robot)[][];

let room: Room;
let robot: Robot;

export async function startWalk() {
	const { x: roomX, y: roomY } = roomQuestions();
	room = createRoom(roomX, roomY);

	const { x: robotX, y: robotY, dir: robotDir } = placeRobotQuestion();
	robot = { x: robotX, y: robotY, direction: robotDir };
	placeRobot(robot, room);

	const moveInput = moveRobotQuestion();
	moveRobot(moveInput, robot, room);

	// Report back robot position and direction
	// console.log(robot x, y and direction);
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

export function moveRobot(input: string, robot: Robot, room: Room) {
	detectCollition(robot, room);
	console.log("moveRobot");
}
