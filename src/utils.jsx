export function delay(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

export const blueClick = new Audio("../sounds/blue.mp3");
export const redClick = new Audio("../sounds/red.mp3");
export const greenClick = new Audio("../sounds/green.mp3");
export const yellowClick = new Audio("../sounds/yellow.mp3");
export const wrongClick = new Audio("../sounds/wrong.mp3");
