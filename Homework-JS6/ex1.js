const database = [
    { id: 1, name: "sok" },
    { id: 2, name: "sao" },
    { id: 3, name: "pisey" },
];

// function getUserId(id, callback) {
//     setTimeout(() => {
//         const userId = database.find((user) => user.id === id);
//         if (userId) {
//             callback(null, userId);
//         } else {
//             console.log("User not found");
//         }
//     }, 2000);
// }

function processUser(user, callback) {
    setTimeout(() => {
        const processedUser = {
            ...user,
            name: user.name.charAt(0).toUpperCase() + user.name.slice(1),
        };
        if (processedUser) {
            callback(null, processedUser);
        } else {
            console.log("Not process");
        }
    }, 1500);
}

// getUserId(2, (err, data) => {
//     if (err) {
//         console.log("Not Found");
//     } else {
//         processUser(data, (err, processedUser) => {
//             if (err) {
//                 console.log("Not process");
//             }
//             console.log(processedUser);
//         });
//     }
// });

function updateById(id, newUserData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userId = database.findIndex((user) => user.id === id);
            if (userId) {
                database[userId] = { id, ...newUserData };
                resolve(database[userId]);
            } else {
                reject("User not found");
            }
        }, 1000);
    });
}

updateById(2, { name: "ok" })
    .then((updatedUser) => {
        console.log("Update", updatedUser);
        console.log(database);
    })
    .catch((err) => console.log(err));
