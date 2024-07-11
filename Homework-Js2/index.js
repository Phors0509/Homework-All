// 1.Write a declaration function that take a parameter called: “name”, and return a greeting message including that name

// function hello(name) {
//     console.log(`Hello ${name}`);
// }
// hello("Boy");

// 2.Write an expression function that take two parameters “num1” & “num2” and returns their sum

// const sum = (num1, num2) => {
//     return num1 + num2;
// };

// console.log(sum(2, 3));

// 3.Write an arrow function that that take an array of numbers as a parameter and returns the average of those numbers

// const arr = [20, 30, 40, 20];
// const average = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// };
// console.log(average(arr));

// 4.Write an anonymous function that calculates BMI (Body Mass Index). Formula: BMI = weight / (height * height)

// (function (weight, height) {
//     return console.log(weight / (height * height));
// })(80, 1.5);

// 5.Write a function that could take a parameter that is an array of objects representing products with `name`, `price` and `quantity` property and filter out products with a quantity of zero

// const products = [
//     { name: "apple", price: 20, quantity: 0 },
//     { name: "banana", price: 30, quantity: 5 },
//     { name: "orange", price: 40, quantity: 0 },
//     { name: "grape", price: 20, quantity: 3 },
// ];

// function filterProducts(products) {
//     const result = [];
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].quantity > 0) {
//             result.push(products[i]);
//         }
//     }
//     return result;
// }
// console.log(filterProducts(products));

// 6.Write a function that could check if the password provided is strong or not. A strong password should have a minimum length of 8 characters

// const checkPassword = (password) => {
//     return password.length >= 8 ? "Strong" : "Weak";
// };

// console.log(checkPassword("1234578"));

// function checkPassword(pass) {
//     if (pass >= 8) {
//         return "Storng";
//     } else {
//         return "Weak ";
//     }
// }
// console.log(checkPassword(5));

// 7.Write a function that count vowels of a string that provided as an input and return the count of vowels (a, e, i, o, u)

// const countVowels = (str) => {
//     let count = 0;
//     const vowels = "aeiou";
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// };
// console.log(countVowels("heaiollo"));

// 8.Write a function that could sort a list of numbers in ascending order not using sort .

// const arr = [26, 3, 56, 6, 84, 95, 9];

// const sort = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }

//     return arr;
// };

// console.log(sort(arr));

// 9.Write a function that takes an array of numbers as an input and returns the median value of the numbers in the array

// const arr = [20, 30, 40, 50, 50, 50, 50, 70, 80, 90, 100, 100];

// const median = (arr) => {
//     arr.sort((a, b) => a - b);

//     let mid = Math.floor(arr.length / 2);

//     if (arr.length % 2 === 0) {
//         return (arr[mid] + arr[mid - 1]) / 2;
//     } else {
//         return arr[mid];
//     }
// };

// console.log(median(arr));

// 10.Write a function that takes a non negative number as a parameter and returns the factorial of that parameter

const factorial = (num) => {
    if (num === 0) {
        return 1;
    } else if (num < 0) {
        return "Negative number";
    }
    return num * factorial(num - 1);
};

console.log(factorial(5));
