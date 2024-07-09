import {
	directionCheck,
	integerCheck,
	moveCheck,
	promptWithNullCheck,
} from "./utils";

/**
 * Asks the user to input the dimensions of a room.
 * @returns An object containing the x and y dimensions of the room.
 */
export function roomQuestions(): { x: number; y: number } {
	const xInput: string = promptWithNullCheck(
		"Enter number of columns for room: ",
	);
	const x: number = integerCheck(xInput);

	const yInput: string = promptWithNullCheck("Enter number of rows for room: ");
	const y: number = integerCheck(yInput);

	return {
		x,
		y,
	};
}

/**
 * Asks the user to input the coordinates and direction of a robot in a room.
 * @returns An object containing the x and y coordinates of the robot, and its direction.
 * @throws {Error} If any of the user inputs are invalid.
 */
export function placeRobotQuestion(): { x: number; y: number; dir: string } {
	console.log(
		"Place robot in the room with x and y coordinate, with a direction",
	);

	const xInput = promptWithNullCheck("Input x coordinate for the robot: ");
	const x: number = integerCheck(xInput);

	const yInput = promptWithNullCheck("Input y coordinate for the robot: ");
	const y: number = integerCheck(yInput);

	const dirInput = promptWithNullCheck("Input direction for the robot: ");
	const dir: string = directionCheck(dirInput);

	return {
		x,
		y,
		dir,
	};
}

/**
 * Asks the user to input a path for the robot.
 * @returns A string containing a path of valid inputs: 'L', 'R', and 'F'.
 * @throws {Error} If the user input is not a valid path for the robot.
 */
export function moveRobotQuestion(): string {
	let answer: string;
	do {
		answer = promptWithNullCheck(
			"Input path of the robot, valid input is 'L', 'R', and 'F': ",
		);
	} while (!moveCheck(answer));
	return answer.toUpperCase();
}
