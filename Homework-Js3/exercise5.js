const readFile = require("./exercise3");
const writeFile = require("./exercise4");

readFile("./file/input.txt", (err, inputContent) => {
    if (err) {
        console.error("Error reading input.txt:", err);
        return;
    }

    const modifiedContent1 = inputContent + "\nFirst modification\n";

    writeFile("./file/output1.txt", modifiedContent1, (err) => {
        if (err) {
            console.error("Error writing output1.txt:", err);
            return;
        }
        console.log("First modification appended to output1.txt");

        readFile("./file/output1.txt", (err, output1Content) => {
            if (err) {
                console.error("Error reading output1.txt:", err);
                return;
            }

            const modifiedContent2 = output1Content + "Second modification\n";

            writeFile("./file/output2.txt", modifiedContent2, (err) => {
                if (err) {
                    console.error("Error writing output2.txt:", err);
                    return;
                }
                console.log("Second modification appended to output2.txt");

                readFile("./file/output2.txt", (err, output2Content) => {
                    if (err) {
                        console.error("Error reading output2.txt:", err);
                        return;
                    }
                    console.log("Final content of output2.txt:");
                    console.log(output2Content);
                });
            });
        });
    });
});
