let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let randomChosenNumber = buttonColors[nextSequence()];

gamePattern.push(randomChosenNumber);

function nextSequence() {
    let randomNumber = Math.floor(Math.random()*4);   
    return randomNumber;
}

$("#green").on("click", function(){


})