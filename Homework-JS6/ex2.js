const fs = require("fs");

function readFile() {
    return new Promise((resolve, rejects) => {
        fs.readFile("./text.txt", "utf8", (err, data) => {
            if (err) {
                rejects(err);
            }
            resolve(data);
        });
    });
}
function writeFile() {
    return new Promise((resolve, rejects) => {
        fs.writeFile("text2.txt", "Wirte KOB", "utf8", (err) => {
            if (err) {
                rejects(err);
                return;
            }
            resolve("Write File ");
        });
    });
}

readFile()
    .then((res1) => {
        console.log(res1);
        return writeFile(res1);
    })
    .then((res2) => {
        console.log("Wirte File", res2);
    })
    .catch((err) => {
        console.log(err);
    });
