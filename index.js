// 1.
//Iterate through the numbers 1 to 10, and at each iteration print “i”

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2.
// Iterate through the numbers 10 to 1, and at each iteration print “i”

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// 3.

// Convert numerical grades into letter grades (A, B, C, D, E, F)

// let grades = [90, 80, 70, 60, 50, 40];

// for (let i = 0; i < grades.length; i++) {
//     let grade = grades[i];
//     if (grade >= 90) {
//         console.log("A");
//     } else if (grade >= 80) {
//         console.log("B");
//     } else if (grade >= 70) {
//         console.log("C");
//     } else if (grade >= 60) {
//         console.log("D");
//     } else if (grade >= 50) {
//         console.log("E");
//     } else {
//         console.log("F");
//     }
// }

// 4.
// A company has a list of employees and their salary in separate arrays. You are tasked with the job of printing our the name of each employee and the employee’s salary as a string in the format: “Employee name: Employee salary”
// Example: let employees = [“Lara”, “Evee”, “Simi”]
// let salary = [1000, 2000, 120.90]

// let employees = ["Lara", "Evee", "Simi"];
// let salary = [1000, 2000, 120.9];

// for (let i = 0; i < employees.length; i++) {
//     console.log(`${employees[i]}: $${salary[i]}`);
// }

// 5.

// Write a loop that displays from 1 to 10 except even numbers?

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// 6.

// Write a program that count the odd and even numbers from the list of numbers containing 1 to 10

// let odd = 0;
// let even = 0;

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         even++;
//     } else {
//         odd++;
//     }
// }
// console.log(`Odd: ${odd} , Even: ${even}`);

// 7.

// Write a program that count the odd and even numbers from the list of numbers containing 1 to 10

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`FizzBuzz`);
//     } else if (i % 3 === 0) {
//         console.log(`Fizz`);
//     } else if (i % 5 === 0) {
//         console.log(`Buzz`);
//     } else {
//         console.log(i);
//     }
// }

// 8.

// Write a program that uses a loop to calculate the sum of all numbers in an array.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {

//     sum += arr[i];

// }

// console.log(sum);

// 9.

// Write a program that prints all prime numbers between 1 and 100.

// for (let i = 2; i <= 100; i++) {

//     let isPrime = true;

//     for (let j = 2; j < i /2 ; j++) {

//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
// }

// 10.

// Write a program that finds the largest number in an array using a loop.

// const arr = [1, 26, 3, 40, 5, 65, 7, 8, 945, 10];

// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }
// console.log(largest);
