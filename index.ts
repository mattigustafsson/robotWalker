import { startWalk } from "./src/walker";

export function executeRobotWalker(): void {
	try {
		startWalk();
	} catch (error) {
		console.log("An error occurred: \n", error);
	}
}

executeRobotWalker();
