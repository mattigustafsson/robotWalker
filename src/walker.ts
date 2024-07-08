import {
	roomQuestions,
	placeRobotQuestion,
	moveRobotQuestion,
} from "./questions";

type Robot = {
	x: number;
	y: number;
	direction: string;
};

let room: number[][];
let robot: Robot;

export async function startWalk() {
	const { width, height } = roomQuestions();
	room = createArea(width, height);

	const { x, y, dir } = placeRobotQuestion();
	robot = { x, y, direction: dir };
	placeRobot(robot);

	const moveInput = moveRobotQuestion();
	moveRobot(moveInput, robot);

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
export function createArea(x: number, y: number): number[][] {
	return Array(y).fill(Array(x).fill(0));
}

export function placeRobot(robot: Robot) {
	room[robot.y][robot.x] = 1;
	console.log("placeRobot", robot.x, robot.y, robot.direction);
}

export function moveRobot(input: string, robot: Robot) {
	console.log("moveRobot");
}
