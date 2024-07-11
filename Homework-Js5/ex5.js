function sumAll(...number) {
    return number.reduce((acc, current) => {
        return acc + current;
    }, 0);
}

console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3, 4, 5));
