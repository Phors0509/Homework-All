const name = "Grorge Raymond Richard Martin";

function initials(name) {
    return name
        .split(" ")
        .map((word) => word[0])
        .reduce((acc, current) => {
            return acc + current;
        });
}
console.log(initials(name));
