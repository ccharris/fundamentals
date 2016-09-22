var hobbiesList = document.getElementById("hobby-list");
console.log(hobbiesList);
var hobbiesEach = document.getElementsByClassName("hobby");
console.log(hobbiesEach); //an array
// var names = ["Carolyn", "Summer", "John", "Paul"]
// console.log(names);
// console.log(names[0]);
console.log(hobbiesEach[0].innerHTML);
console.log(hobbiesEach[0].innerHTML ,hobbiesEach[1].innerHTML, hobbiesEach[2].innerHTML, hobbiesEach[3].innerHTML);

var musicPrefs = document.getElementById("music");
console.log(musicPrefs);
function favoriteSong() {
	document.getElementById("favorite").innerHTML = "Freebird!";
}
favoriteSong();

function worstSong() {
	document.getElementById("worst").innerHTML = "any screamo song";
}
worstSong();

function bestSong() {
	document.getElementById("best").innerHTML = "Cable Car";
}
bestSong();