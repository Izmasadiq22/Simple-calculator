#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstnumber" },
    { message: "Enter your second number", type: "number", name: "secondnumber" },
    {
        message: "Select one of operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
//CONDITIONAL STATEMENT
if (answer.operator === "ADDITION") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    "please select valid operator";
}
