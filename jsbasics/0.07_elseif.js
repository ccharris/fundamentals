// var bankAccount = 5000;
// var appleWatch = 400;
// var appleWatchGold = 10000;

// if (bankAccount > appleWatchGold) {
// 	console.log("make it rain, boii");
// } else if ( bankAccount > appleWatch) {
// 	console.log("Well it's not gold but it's a watch!");
// } else {
// 	console.log("get a job!")
// }

// var personAge = 17;
// var votingAge = 18;
// var registeredVote = false;

// if (personAge >= votingAge && registeredVote) {
// 	console.log("You are registered to vote!")
// } else if (personAge >= votingAge && !registeredVote) { 
// 	console.log("Go get registered!")
// } else {
// 	console.log("You are not eligible to vote yet.")
// }

var numDivis = 4
if (numDivis % 3 == 0 && numDivis % 2 == 0) {
	console.log("Divisible evenly by both 2 & 3")
} else if (numDivis % 3 == 0 && numDivis % 2 !== 0) {
	console.log("Divisible evenly by 3, but not 2.")
} else if (numDivis % 3 !== 0 && numDivis % 2 == 0) {
	console.log("Divisble evenly by 2, but not 3.")
} else {
	console.log("Number cannot by divided evenly by 3 or 2.")
}





