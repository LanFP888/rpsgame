$(window).on('load', function () {
    $('#launchModal').modal('show');
});

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    document.getElementById("userInput").innerHTML = inputToWord(userGuess);
    document.getElementById("userInputImg").src = inputToImg(userGuess);
    document.getElementById("computerInput").innerHTML = inputToWord(computerGuess);
    document.getElementById("computerInputImg").src = inputToImg(computerGuess);

    var myWin = document.getElementById("myWin").innerText
    var computerWin = document.getElementById("computerWin").innerText
    var result = compare(userGuess, computerGuess)

    if (result === "Tie") {
        document.getElementById("result").innerHTML = "Tie";
    }
    else if (result === "UW") {
        document.getElementById("result").innerHTML = "You Win!";
        myWin = parseInt(myWin) + 1
        document.getElementById("myWin").innerHTML = myWin;
    } else if (result === "CW") {
        document.getElementById("result").innerHTML = "Computer Wins";
        computerWin = parseInt(computerWin) + 1
        document.getElementById("computerWin").innerHTML = computerWin;
    } else {
        document.getElementById("result").innerHTML = "Invalid Input";
    }

};

var inputToWord = function (input) {
    input = input.toLowerCase();
    switch (input) {
        case "r":
            return "Rock";
            break;
        case "s":
            return "Scissor";
            break;
        case "p":
            return "Paper";
            break;
        default:
            return "Invalid Input"
    }
}

var inputToImg = function (input) {
    input = input.toLowerCase();
    switch (input) {
        case "r":
            return './images/Rock.png';
            break;
        case "s":
            return './images/Scissor.png';
            break;
        case "p":
            return './images/Paper.png';
            break;
        default:
            return './images/RedX.png';
    }
}
var compare = function (usrChoice, cpuChoice) {
    usrChoice = usrChoice.toLowerCase();
    cpuChoice = cpuChoice.toLowerCase();

    if (usrChoice === cpuChoice) {
        return "Tie"
    }
    if (usrChoice === "r") {
        if (cpuChoice === "s") {
            return "UW";
        }
        else {
            return "CW";
        }
    }
    if (usrChoice === "p") {
        if (cpuChoice === "r") {
            return "UW";
        }
        else {
            return "CW";
        }
    }
    if (usrChoice === "s") {
        if (cpuChoice === "r") {
            return "CW";
        }
        else {
            return "UW";
        }
    }
};