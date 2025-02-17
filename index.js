//Save the buttons as constants
const guessbutton = document.querySelector("#guess-button");
const resetbutton = document.querySelector("#reset-button")
const highscorebutton =document.querySelector("#highscore-button")


//Make a random number between 1-5
let randomNumber = generateNumber();
console.log(randomNumber);

//Returns a random number between 1-5
function generateNumber(){
    return Math.floor(Math.random() * 5) + 1;
}

//let consoleNumber =null;
//Add an eventListener that takes input from the input field
guessbutton.addEventListener("click", () =>{
    console.log("Congrats!!!!");
    let consoleNumber = document.querySelector("#userGuess").value;
    console.log(consoleNumber);

    if (randomNumber === Number(consoleNumber)) {
        console.log("you guessed right !!!!");
        guessbutton.innerText="you guessed right !!!!";

    } else{
        console.log("You were totally wrong!! Try again");
        //guessbutton.innerText="You were totally wrong!! Try again";
        if (randomNumber > Number(consoleNumber)){
            guessbutton.innerText="You were totally wrong!! Try again";
            guessbutton.innerText="guess is lower than the randon number";
        }else {
            guessbutton.innerText="You were totally wrong!! Try again";
            guessbutton.innerText="guess is higher than the randon number";
        }

    }

});

