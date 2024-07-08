import {
	integerCheck,
	moveCheck,
	promptWithNullCheck,
	dirrectionCheck,
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

	const dirrInput = promptWithNullCheck("Input direction for the robot: ");
	const dirr = dirrectionCheck(dirrInput);

	return {
		x,
		y,
		dirr,
	};
}

export function moveRobotQuestion() {
	let answer: string;
	do {
		answer = promptWithNullCheck("Input path of the robot: ");
	} while (moveCheck(answer));
}
