//Assignment
//CHAP26-30
//QUESTION NO1
let userInput = prompt("Please enter a positive integer:");


let number = parseFloat(userInput);
let roundValue = Math.round(number);
console.log(roundValue);
let floorValue = Math.floor(number);
console.log(floorValue);
let ceilValue = Math.ceil(number);
console.log(ceilValue);

//QUESTION NO3

let Input = prompt("Please enter a number:");


let num = parseFloat(Input);

let absoluteValue = Math.abs(num);

console.log("The absolute value of "+ num +" is: " + absoluteValue);



//QUESTION NO4

function rollDice() {
    // Generate a random number between 0 and 1
    let randomNumber = Math.random();
    
    // Map this random number to the range 1 to 6
    // Math.random() returns a value between 0 (inclusive) and 1 (exclusive)
    // So we scale it to 6 and use Math.floor() to get an integer
    let diceValue = Math.floor(randomNumber * 6) + 1;
    
    // Display the dice value
    alert("You rolled a"+ diceValue);
}


rollDice();

//QUESTION NO6
// Generate a random number between 1 and 100
let randomNumber = Math.random(); 
let randomValue = Math.floor(randomNumber * 100) 

// Display the result
console.log("Random number between 1 and 100:"+ randomValue);

//QUESTION NO7
// Prompt the user to enter their weight
let userWeight = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");


let weight = parseFloat(userWeight.match(/[\d.]+/)[0]);

alert("Your weight is:"+ weight);


//QUESTION NO8

let secretNumber = Math.floor(Math.random(3) * 10) + 1;


let userGuess = parseInt(prompt("Guess a number between 1 and 10:"), 10);


if (userGuess === secretNumber) {
    alert("Congratulations! You guessed the correct number.");
} else {
    alert("Sorry, that's not correct. The secret number was " + secretNumber + ".");
}
