/* eslint-disable */
// import "bootstrap";
// import "./style.css";
// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";
/*	
	COMENTE ESTAS LINEAS PORQUE ME DEVOLVIA ESTE ERROR.
	Uncaught SyntaxError: Cannot use import statement outside a module
*/

window.onload = function() {
  	//write your code here

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
};
