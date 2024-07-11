// 6.You have an array of objects where each object has properties `name` and `category`. Use the `reduce` method to group these objects by category.
// Input: [ {name: “Bread”, category: “Grocery”}, {name: “Butter”, category: “Grocery”}, {name: “Shampoo”, category: “Personal Care”}]
// Output: { “Grocery”: [“Bread”, “Butter”], “Personal Care”: [“Shampoo”]}

const items = [
    { name: "Bread", category: "Grocery" },
    { name: "Butter", category: "Grocery" },
    { name: "Shampoo", category: "Personal Care" },
];

const groupedByCategory = items.reduce((acc, current) => {
    const category = current.category;
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(current.name);
    return acc;
}, {});

console.log(groupedByCategory);
