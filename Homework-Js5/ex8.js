function countNum(...num) {
    return num.reduce((acc, current) => {
        if (acc[current]) {
            acc[current]++;
        } else {
            acc[current] = 1;
        }
        return acc;
    }, {});
}

console.log(countNum(1, 2, 3, 4, 5, 6, 6, 3));
