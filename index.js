//Save the buttons as constants
const guessbutton = document.querySelector("#guess-button");
const resetbutton = document.querySelector("#reset-button")
const highscorebutton =document.querySelector("#highscore-button")

//Make a random number between 1-5
let randomNumber = generateNumber();
console.log(randomNumber);

let streak = 0;
let highscore=0;
let firstTry=true;


//Returns a random number between 1-5
function generateNumber(){
    return Math.floor(Math.random() * 5) + 1;
}

//Add an eventListener that takes input from the input field
guessbutton.addEventListener("click", () =>{
    //console.log("Congrats!!!!");
    let consoleNumber = document.querySelector("#userGuess").value;
    console.log(consoleNumber);
    streak++;
    if (randomNumber === Number(consoleNumber)) {
        console.log("you guessed right !!!!");
        guessbutton.innerText="you guessed right !!!!";

        if (firstTry){
            //streak++;
            if (streak>highscore){
                highscore = streak;
            }
        }

        alert(`Current Streak: ${streak}, High Score: ${highscore}`);

        randomNumber = generateNumber();
        console.log(`the new random number is ${randomNumber}`);
        //firstTry=false;

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
        firstTry = false;
    }
});

resetbutton.addEventListener("click", ()=>{
    randomNumber= generateNumber();
    console.log(`the new random number is ${randomNumber}`);

    document.querySelector(("#userGuess").value);
    guessbutton.innerText = "Submit Guess";

    //reset streak, highScore and firstTry

    streak=0;
    highscore=0;
    firstTry=true;

    alert (`Game reset Successfully!!, High Score reset Successfully!!`);

})



