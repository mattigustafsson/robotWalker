import { startWalk } from "./src/walker";

/**
 * Executes the web scraper.
 */
export function executeRobotWalker(): void {
	try {
		startWalk();
	} catch (error) {
		console.error(error);
	}
}

executeRobotWalker();
