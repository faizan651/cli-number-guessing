#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 10: ",
    },
]);
console.log(answers);
console.log("Computer generated random number was " + randomNumber);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed a right number.");
}
else {
    console.log("You guessed wrong number.");
}
