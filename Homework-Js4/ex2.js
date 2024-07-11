// 2.Given an array of numbers which includes duplicates, use `filter` method to create a new array that contains only unique values

const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9, 10];

function filterNumber(numbers) {
    return numbers.filter((number, index) => numbers.indexOf(number) === index);
}

console.log(filterNumber(numbers));
