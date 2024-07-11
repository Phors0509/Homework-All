// 1. Write a function called that takes an array of numbers and a callback function that processes each element of the array. Use the callback to square each number in the array. (map method of array)

const arr = [1, 2, 3, 4, 5];

function square(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

function squareNum(num) {
    return num * num;
}

console.log(square(arr, squareNum));
