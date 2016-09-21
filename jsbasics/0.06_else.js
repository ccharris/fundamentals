var elevatorUp = false;
var elevatorBroken = false;
var elevatorDown = true;
var elevatorStop = false;

if(elevatorUp === true) {
	console.log("Going up!");
} else {
	console.log("The elevator is not going up.");
}

if (elevatorBroken) {
	console.log("The elevator is currently out of order.");
} else {
	console.log("The elevator is working fine.");
}

if (elevatorDown) {
	console.log("The elevator is going down.");
} else {
	console.log("The elevator is not going down.");
}

if (elevatorStop) {
	console.log("The elevator is stopped.");
} else {
	console.log("The elevator is in motion.");
}

if (elevatorDown && !elevatorBroken) {
	console.log("The elevator is correctly going down.")
} else {
	console.log("the elevator is not going down correctly.")
}

