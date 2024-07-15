const fs = require("fs");

function readFile() {
    return new Promise((reslove, rejects) => {
        fs.readFile("text.txt", "utf8", (err, data) => {
            if (err) {
                rejects(`Error : " ${err} " `);
            } else {
                reslove(`File Read : " ${data} " `);
            }
        });
    });
}

function writeToFile(pathData, content) {
    return new Promise((resolve, reject) => {
        writeFile(pathData, content, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("Succeeeee");
            }
        });
    });
}

module.exports = readFile;
// module.exports = writeToFile;

// readFile()
//     .then((res1) => {
//         console.log(res1);
//         return writeFile(pathData);
//     })
//     .then((res2) => {
//         console.log(res2);
//     })
//     .catch((err) => console.log(err));
