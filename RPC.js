let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreBoard = document.querySelector("scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getCompChoice() {
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}



function convertToText(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	if(letter === "s") return "Scissors"
}


function game(userChoice){
	const compChoice = getCompChoice();
		switch(userChoice + compChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, compChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, compChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, compChoice);
			break;
	}
}

function win(user, computer){
	userScore++;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();	
	const userChoice = document.getElementById(user);
	const compChoice = document.getElementById(computer);
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = `${convertToText(user)}${smallUserWord} beats ${convertToText(computer)}${smallCompWord}. You win!`;
	userChoice.classList.add("greenGlow");
	setTimeout(() => userChoice.classList.remove("greenGlow"), 500);
	compChoice.classList.add("redGlow");
	setTimeout(() => compChoice.classList.remove("redGlow"), 500);


}

function lose(user, computer){
	compScore++;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();	
	const userChoice = document.getElementById(user);
	const compChoice = document.getElementById(computer);
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToText(user)}${smallUserWord} loses to ${convertToText(computer)}${smallCompWord}. You lose.`;
	userChoice.classList.add("redGlow");
	setTimeout(() => userChoice.classList.remove("redGlow"), 500);
	compChoice.classList.add("greenGlow");
	setTimeout(() => compChoice.classList.remove("greenGlow"), 500);

}

function draw(user, computer){
	const userChoice = document.getElementById(user);
	const compChoice = document.getElementById(computer);
	result_p.innerHTML = `Its A Draw.`;	
	userChoice.classList.add("greyGlow");
	setTimeout(() => userChoice.classList.remove("greyGlow"), 500);
	compChoice.classList.add("greyGlow");
	setTimeout(() => compChoice.classList.remove("greyGlow"), 500);
}


function main(){
	rock_div.addEventListener("click",() => game("r"));

	paper_div.addEventListener("click",() => game("p"));

	scissors_div.addEventListener("click", () => game("s"));
	
}

main();





