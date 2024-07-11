const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

// function filterProp(obj, ...props) {
//     let newObj = {};
//     for (let key in obj) {
//         if (!props.includes(key)) {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }

function filterProp(obj, ...props) {
    return Object.keys(obj).reduce((acc, key) => {
        if (!props.includes(key)) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}

console.log(filterProp(obj, "a"));
