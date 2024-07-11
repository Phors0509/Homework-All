// 5.Given an array of numbers, use the `reduce` method to find the maximum number of the array

const numbers = [1, 2, 3, 4, 9, 6, 7, 8, 5];

function findMax(numbers) {
    return numbers.reduce((max, number) => {
        return number > max ? number : max;
    }, 0);
}

console.log(findMax(numbers));
