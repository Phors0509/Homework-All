// 3.Given an array of user objects which include property name and age, use the `map` method to create a new array that contains just the names of the users

const users = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "cam", age: 30 },
];
function mapUser(users) {
    return users.map((user) => user.name);
}

console.log(mapUser(users));
