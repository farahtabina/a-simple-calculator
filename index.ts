#! /usr/bin/env node 
import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },

  {
    message: "Slect one Operator to perform operations",
    type: "list",
    name: "operator",

    choices:["Addition","Subtraction","Multiplication","Division"],
  },
]);
// console.log(answer);
// conditional statement if-else


if (answer.operator ==="Addition"){
  console.log(answer.firstNumber+answer.secondNumber)
}
else if(answer.operator ==="Subtraction"){
  console.log(answer.firstNumber-answer.secondNumber)
}
else if(answer.operator ==="Multiplication"){

console.log(answer.firstNumber*answer.secondNumber)
}
else if(answer.operator ==="Division"){
  console.log(answer.firstNumber/answer.secondNumber)  
}
else{
  console.log("Invalid input")
}

