import type { Robot, Room } from "./walker";

export function integerCheck(answer: string): number {
	const integer = Number(answer);

	if (!Number.isInteger(integer) || Number.isNaN(integer) || integer < 1) {
		throw new Error("Input must be a positive integer");
	}
	return integer;
}

export function directionCheck(answer: string) {
	if (!["N", "E", "S", "W", "n", "e", "s", "w"].includes(answer)) {
		throw new Error("Input must be one of the following: N, E, S, W");
	}

	return answer;
}

export function moveCheck(answer: string) {
	return /^[flrFLR]+$/gm.test(answer);
}

export function promptWithNullCheck(message: string): string {
	const input = prompt(message);
	if (input === null) {
		throw new Error("Input cannot be null");
	}
	return input;
}

export function detectCollition(robotPosition: Robot, room: Room): boolean {
	const { x: robotX, y: robotY } = robotPosition;
	const roomX = room[0].length;
	const { length: roomY } = room;

	return robotX < 0 || robotY < 0 || robotX >= roomX || robotY >= roomY;
}

export function turnLeft(currentDirection: string): string {
	const directionMap: { [key: string]: string } = {
		N: "W",
		W: "S",
		S: "E",
		E: "N",
	};

	const lowerCaseDirection = currentDirection.toUpperCase();
	const newDirection = directionMap[lowerCaseDirection];

	return newDirection;
}

export function turnRight(currentDirection: string): string {
	const directionMap: { [key: string]: string } = {
		N: "E",
		E: "S",
		S: "W",
		W: "N",
	};
	const lowerCaseDirection = currentDirection.toUpperCase();
	const newDirection = directionMap[lowerCaseDirection];

	return newDirection;
}

export function moveForward(robot: Robot): Robot {
	const direction = robot.direction.toUpperCase();
	switch (direction) {
		case "N":
			robot.y--;
			break;
		case "S":
			robot.y++;
			break;
		case "E":
			robot.x++;
			break;
		case "W":
			robot.x--;
			break;
	}
	return robot;
}
