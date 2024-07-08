import {
	integerCheck,
	moveCheck,
	promptWithNullCheck,
	directionCheck,
} from "./utils";

export function roomQuestions() {
	const widthInput = promptWithNullCheck("Enter room width: ");
	const width = integerCheck(widthInput);

	const heightInput = promptWithNullCheck("Enter room height: ");
	const height = integerCheck(heightInput);

	return {
		height,
		width,
	};
}

export function placeRobotQuestion() {
	console.log(
		"Place robot in the room with x and y coordinate, with a direction",
	);

	const xInput = promptWithNullCheck("Input x coordinate for the robot: ");
	const x = integerCheck(xInput);

	const yInput = promptWithNullCheck("Input y coordinate for the robot: ");
	const y = integerCheck(yInput);

	const dirInput = promptWithNullCheck("Input direction for the robot: ");
	const dir = directionCheck(dirInput);

	return {
		x,
		y,
		dir,
	};
}

export function moveRobotQuestion() {
	let answer: string;
	do {
		answer = promptWithNullCheck(
			"Input path of the robot, valid input is 'l', 'r', or 'f': ",
		);
	} while (!moveCheck(answer));
	return answer;
}
