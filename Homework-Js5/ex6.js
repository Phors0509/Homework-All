const point = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 4 },
];

const [firstPoint, ...otherPoint] = point;

console.log(firstPoint);

console.log(otherPoint);
