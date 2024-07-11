// 3. Use Node.js's fs module to read a file asynchronously:`fs.readFile`. Write a function that takes a file path and a callback. Use the callback to print the contents of the file to the console.

const fs = require("fs");
// console.log("Start");

const readFile = (filePath, callback) => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, data);
    });
};

// const filePath = "./file/hello.txt";

// readFile(filePath, (data, err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });
// console.log("End");

module.exports = readFile;
