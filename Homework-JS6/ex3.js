const fs = require("fs");

function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile("text.txt", "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
function writeFile() {
    return new Promise((resolve, rejects) => {
        fs.writeFile("text4.txt", "Content", "utf8", (err) => {
            if (err) {
                rejects(err);
            }
            resolve("Write File Succcc");
        });
    });
}

async function processFile() {
    try {
        let res1 = await readFile();
        console.log(res1);
        let res2 = await writeFile();
        console.log(res2);
    } catch {
        console.log("errr");
    }
}
processFile();
