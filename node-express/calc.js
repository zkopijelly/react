// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const operation = process.argv[2]; 
// const num1 = parseFloat(process.argv[3]);
// const num2 = parseFloat(process.argv[4]); 

// if (!operation || isNaN(num1) || isNaN(num2)) {
//     console.log("Please provide valid inputs. Example: node calc.js add 1 2");
//     readline.close();
//     return;
// }

// let result;

// switch (operation) {
//     case 'add':
//         result = num1 + num2;
//         break;
//     case 'subtract':
//         result = num1 - num2;
//         break;
//     case 'multiply':
//         result = num1 * num2;
//         break;
//     case 'divide':
//         if (num2 === 0) {
//             console.log("Error: Cannot divide by zero");
//             readline.close();
//             return;
//         }
//         result = num1 / num2;
//         break;
//     default:
//         console.log("Invalid operation. Please choose from: add, subtract, multiply, divide.");
//         readline.close();
//         return;
// }

// console.log(`The result of ${operation} ${num1} and ${num2} is: ${result}`);
// readline.close();

// no switch statement, using if else
// Get the operation and numbers from command-line arguments
// const operation = process.argv[2];
// const num1 = parseFloat(process.argv[3]);
// const num2 = parseFloat(process.argv[4]);

// // Check if all arguments are provided
// if (!operation || isNaN(num1) || isNaN(num2)) {
//     console.log("Usage: node calc.js <operation> <num1> <num2>");
//     process.exit(1);
// }

// // Perform the calculation based on the operation
// let result;

// if (operation === 'add') {
//     result = num1 + num2;
// } else if (operation === 'subtract') {
//     result = num1 - num2;
// } else if (operation === 'multiply') {
//     result = num1 * num2;
// } else if (operation === 'divide') {
//     if (num2 === 0) {
//         console.log("Error: Cannot divide by zero.");
//         process.exit(1);
//     }
//     result = num1 / num2;
// } else {
//     console.log("Invalid operation. Use: add, subtract, multiply, divide.");
//     process.exit(1);
// }

// console.log(result);

import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({ input, output });

const num1 = await rl.question('Please enter the first number: ');
const num2 = await rl.question('Please enter the second number: ');
const sum = Number(num1) + Number(num2)
// sum
console.log(`The sum of the ${num1} and ${num2} is ${sum}`)
// product
const product = Number(num1) * Number(num2)
console.log(`The product of the ${num1} and ${num2} is ${sum}`)

// difference
const num3 = await rl.question('Please enter the first number: ');
const num4 = await rl.question('Please enter the second number: ');

const difference = Number(num3) - Number(num4)
console.log(`The difference between ${num3} and ${num4} is: ${difference}`)

// quotient
const quotient = Number(num3) / Number(num4)
console.log(`The quotient between ${num3} and ${num4} is: ${quotient}`)

rl.close()