let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

const randomNumber = (min, max) => Math.floor((Math.random() * max) + min);

const getExcuse = () => {
	const excuseHTML = document.getElementById("excuse");
	
	let excuse = "";

	excuse += who[randomNumber(0, 4)] + " ";
	excuse += action[randomNumber(0, 4)] + " ";
	excuse += what[randomNumber(0, 3)] + " ";
	excuse += when[randomNumber(0, 5)];

	excuseHTML.innerHTML = excuse;
}

getExcuse();