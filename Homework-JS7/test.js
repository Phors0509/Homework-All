class Calculator {
    // Method to add numbers
    add() {
        let result = 0;

        // Loop through arguments and sum them
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }

        return result;
    }
}

const calc = new Calculator();

console.log(calc.add(1, 2)); // Output: 3
console.log(calc.add(1, 2, 3, 4)); // Output: 10
console.log(calc.add(5)); // Output: 5
